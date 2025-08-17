import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, MapPin, Calendar, Sprout } from "lucide-react";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface FieldDetailsModalProps {
  field: any;
  isOpen: boolean;
  onClose: () => void;
}

const FieldDetailsModal: React.FC<FieldDetailsModalProps> = ({ field, isOpen, onClose }) => {
  if (!field) return null;

  // Sample notifications data
  // const notifications = [
  //   { id: 1, type: "warning", message: "Low soil moisture detected", time: "2 hours ago" },
  //   { id: 2, type: "info", message: "Optimal temperature for growth", time: "5 hours ago" },
  //   { id: 3, type: "alert", message: "High humidity levels", time: "1 day ago" },
  // ];
  const [alerts, setAlerts] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const BASE_URL_AGRI = import.meta.env.VITE_BACKEND_BASE_URL_AGRI;

  useEffect(() => {
    console.log(field);
    setAlerts([]);
    axios.post(`${BASE_URL_AGRI}/alert/get-alerts-by-hub`, {
      sensor_hub_id: field.hubCode
    }).then((res) => {
      const sorted = res.data.alerts
        .sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()) // sort desc
      // .slice(0, 10);
      console.log(sorted);
      setAlerts(sorted);
    });

    setGraphData([]);
    axios.post(`${BASE_URL_AGRI}/field/get-sensor-data-by-hubid`, {
      sensor_hub_id: field.hubCode
    }).then((res) => {
      const graphResponse = res.data.data;
      const headers = graphResponse[0];
      const rows = graphResponse[1];
      const transformedGraphResponse = rows.map(row => {
        const obj = {};
        headers.forEach((header, i) => {
          obj[header] = row[i];
        });
        return obj;
      });
      console.log(transformedGraphResponse);
      setGraphData(
        transformedGraphResponse
          .sort((a: any, b: any) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()) // ascending
          .slice(-10)
      );
    });

  }, [field])

  // Chart data for Humidity Levels
  const humidityTemperatureData = {
    labels: graphData.map((data) => data.timestamp),
    datasets: [
      {
        label: 'Humidity (%)',
        data: graphData.map((data) => data.humidity),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
        tension: 0.4,
      },
      {
        label: 'Temperature (C)',
        data: graphData.map((data) => data.temperature),
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 1,
      },
    ],
  };

  // Chart data for Water Levels
  const phData = {
    labels: graphData.map((data) => data.timestamp),
    datasets: [
      {
        label: 'pH Level',
        data: graphData.map((data) => data.ph_level),
        backgroundColor: 'rgba(59, 130, 246, 0.6)', // blue
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  // Chart data for Na-K Levels
  const npkData = {
    labels: graphData.map((data) => data.timestamp),
    datasets: [
      {
        label: 'Nitrogen (N)',
        data: graphData.map((data) => data.nitrogen_level),
        backgroundColor: 'rgba(34, 197, 94, 0.6)', // green
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1,
      },
      {
        label: 'Phosphorus (P)',
        data: graphData.map((data) => data.phosphorus_level),
        backgroundColor: 'rgba(59, 130, 246, 0.6)', // blue
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
      {
        label: 'Potassium (K)',
        data: graphData.map((data) => data.potassium_level),
        backgroundColor: 'rgba(249, 115, 22, 0.6)', // orange
        borderColor: 'rgb(249, 115, 22)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  function formatDateTime(timestamp: string) {
    const d = new Date(timestamp);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // month is 0-indexed
    const year = d.getFullYear();

    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const seconds = String(d.getSeconds()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-600">
            {field.fieldName} ({field.fieldId})
          </DialogTitle>
          <p className="text-lg text-gray-600 flex items-center gap-2">
            <Sprout className="h-5 w-5" />
            {field.cropName}
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Field Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Field Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-600">Started Info:</p>
                  <p className="text-sm">{field.startedInfo}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Current Status:</p>
                  <p className='text-sm'>{field.currentStatus}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Hub Code:</p>
                  <Badge variant="outline">{field.hubCode}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* <div>
                  <p className="text-sm font-medium text-gray-600">Latitude:</p>
                  <p className="text-sm">{field.location.lat}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Longitude:</p>
                  <p className="text-sm">{field.location.lng}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Last Updated:</p>
                  <p className="text-sm">{field.timestamp.toLocaleString()}</p>
                </div> */}
                {field.location.lat && field.location.lng && (
                  <div className="mt-3">
                    <iframe
                      width="100%"
                      height="200"
                      className="rounded-lg border"
                      loading="lazy"
                      allowFullScreen
                      src={`https://www.google.com/maps?q=${field.location.lat},${field.location.lng}&z=15&output=embed`}
                    ></iframe>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                {alerts.length > 0 && alerts.map((notification, id) => (
                  <div key={id} className="flex items-center justify-between p-5 bg-gray-50 rounded-lg relative">
                    <div className="flex items-center gap-3">
                      <div className='flex-1 items-center'>
                        <Badge
                          variant={notification.action_severity === 'high' ? 'destructive' :
                            notification.action_severity === 'medium' ? 'yellow' : 'default'}
                        >
                          {notification.action_severity}
                        </Badge>
                        <br />
                        <Badge
                          variant={'default'}
                        >
                          {notification.type}
                        </Badge>
                      </div>
                      <p className="text-sm">{notification.action_body}</p>
                    </div>
                    <p className="absolute bottom-2 right-2 text-xs text-gray-500">{formatDateTime(notification.timestamp)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <h2>Sensor Data</h2>
          <Card>
            <CardHeader>
              <CardTitle>NPK Levels</CardTitle>
              <CardDescription>Last 10 Nitrogen, Phosphorus & Potassium levels in soil</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Bar data={npkData} options={chartOptions} />
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Humidity & Temperature</CardTitle>
                <CardDescription>Last 10 humidity & Temperature measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <Bar data={humidityTemperatureData} options={chartOptions} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>pH Levels</CardTitle>
                <CardDescription>Last 10 pH measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <Bar data={phData} options={chartOptions} />
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FieldDetailsModal;