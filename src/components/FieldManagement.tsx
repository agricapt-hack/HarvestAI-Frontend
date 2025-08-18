import { useContext, useEffect, useState } from "react";
import { Phone, Users, TrendingUp, Sprout, Star, Shield, Zap, Plus, Trash2, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import FinancialCard from "@/components/FinancialCard";
import ConversationModal from "@/components/ConversationModal";
import FlowchartModal from "@/components/FlowchartModal";
import ProductActionModal from "@/components/ProductActionModal";
import AnalysisModal from "@/components/AnalysisModal";
import SignupModal from "@/components/SignupModal";
import LoginModal from "@/components/LoginModal";
import LanguageSelector from "@/components/LanguageSelector";
import LoadingModal from "@/components/LoadingModal";
import FileUploadSection from "@/components/FileUploadSection";
import UserMenu from "@/components/UserMenu";
import { useTranslation } from "react-i18next";
import { useUser } from "@clerk/clerk-react";
import { useApp } from "@/store/AppContext";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

export default function FieldManagement() {
    const BASE_URL_AGRI = import.meta.env.VITE_BACKEND_BASE_URL_AGRI;

    const { user, isSignedIn } = useUser();
    const [showAddField, setShowAddField] = useState(false);
    const [showFieldDetails, setShowFieldDetails] = useState(false);
    const [selectedField, setSelectedField] = useState(null);
    const [fieldName, setFieldName] = useState("");
    const [cropName, setCropName] = useState("");
    // const [comments, setComments] = useState("");
    const [startedInfo, setStartedInfo] = useState("");
    const [currentStatus, setCurrentStatus] = useState("");
    const [hubCode, setHubCode] = useState("");
    const [location, setLocation] = useState({ lat: null, lng: null });
    const [changeRequired, setChangeRequired] = useState(false);
    const [fields, setFields] = useState([
        // {
        //     fieldId: "F001",
        //     fieldName: "Field 1",
        //     cropName: "Wheat",
        //     timestamp: new Date("2024-01-15T09:30:00"),
        //     notifications: 2,
        //     startedInfo: "Started 6 months ago with high-quality seeds",
        //     currentStatus: "Growing",
        //     hubCode: "HUB001",
        //     location: { lat: 28.6139, lng: 77.2090 },
        // },
        // {
        //     fieldId: "F002",
        //     fieldName: "Field 2",
        //     cropName: "Rice",
        //     timestamp: new Date("2024-01-10T14:20:00"),
        //     notifications: 1,
        //     startedInfo: "Planted during monsoon season",
        //     currentStatus: "Harvesting",
        //     hubCode: "HUB002",
        //     location: { lat: 19.0760, lng: 72.8777 },
        // },
        // {
        //     fieldId: "F003",
        //     fieldName: "Field 3",
        //     cropName: "Corn",
        //     timestamp: new Date("2024-01-08T11:45:00"),
        //     notifications: 3,
        //     startedInfo: "Experimental hybrid variety",
        //     currentStatus: "Irrigating",
        //     hubCode: "HUB003",
        //     location: { lat: 13.0827, lng: 80.2707 },
        // },
    ]);

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

    useEffect(() => {
        const fetchFieldsByUserEmail = async () => {
            axios.post(`${BASE_URL_AGRI}/field/get-all-fields-by-userid`, {
                user_id: user?.primaryEmailAddress?.emailAddress
            }).then((res) => {
                console.log(res.data.fields)
                const fieldsArray = res.data.fields;
                const transformedFieldsArray = fieldsArray.map(field => ({
                    fieldId: field.field_id,
                    fieldName: field.field_name,
                    cropName: field.crop_type,
                    timestamp: field.created_at || "",
                    notifications: 0,
                    startedInfo: field.user_texts?.[0] || "",
                    currentStatus: field.user_texts?.[1] || "",
                    hubCode: field.sensor_hub_id,
                    location: {
                        lat: field.field_location.latitude,
                        lng: field.field_location.longitude
                    }
                }));
                setFields(transformedFieldsArray);
            })
        }
        fetchFieldsByUserEmail();

    }, [user, changeRequired])

    const appContext = useApp();

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                    // Set default location if geolocation fails
                    setLocation({ lat: 28.6139, lng: 77.2090 });
                }
            );
        } else {
            // Set default location if geolocation is not supported
            setLocation({ lat: 28.6139, lng: 77.2090 });
        }
    };

    const handleAddField = async () => {
        if (fieldName.trim().length === 0 || cropName.trim().length === 0 || startedInfo.trim().length === 0 || currentStatus.trim().length === 0 || hubCode.trim().length === 0 || !location.lat || !location.lng) {
            toast({
                title: "All fields are mandatory",
                variant: "destructive",
            });
            return;
        }
        const payload = {
            // field_id: `F${String(fields.length + 1).padStart(3, '0')}`,
            field_id: `F${Math.random().toString(36).substring(2, 10)}`,
            user_id: user?.primaryEmailAddress?.emailAddress,
            field_name: fieldName.trim(),
            crop_type: cropName.trim(),
            timestamp: new Date(),
            user_texts: [startedInfo.trim(), currentStatus.trim()],
            sensor_hub_id: hubCode.trim(),
            field_location: {
                latitude: location.lat,
                longitude: location.lng
            },
        }
        await axios.post(`${BASE_URL_AGRI}/field/add-field`, payload);
        // setFields([...fields, newField]);
        setChangeRequired(!changeRequired);
        setFieldName("");
        setCropName("");
        // setComments("");
        setStartedInfo("");
        setCurrentStatus("");
        setHubCode("");
        setLocation({ lat: null, lng: null });
        setShowAddField(false);
    };

    const handleFieldClick = (field) => {
        // setSelectedField(field);
        appContext.updateFieldData(field);
        appContext.handleToggleFieldDetails();
        // setShowFieldDetails(true);
    };

    const handleDeleteField = (fieldId: string) => {
        setFields(fields.filter(field => field.fieldId !== fieldId));
    };


    return (<>
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-16 border border-white/20">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        Field Management
                    </h3>
                    <p className="text-gray-600 mt-2">Manage your agricultural fields and crops</p>
                </div>
                <Dialog open={showAddField} onOpenChange={setShowAddField}>
                    <DialogTrigger asChild>
                        <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                            <Plus className="h-4 w-4 mr-2" />
                            Add New Field
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add New Field</DialogTitle>
                            <DialogDescription>
                                Create a new field entry for your crop management.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            {/* <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="fieldId" className="text-right">
                                    Field ID
                                </Label>
                                <Input
                                    id="fieldId"
                                    value={`F${String(fields.length + 1).padStart(3, '0')}`}
                                    className="col-span-3"
                                    disabled
                                />
                            </div> */}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="fieldName" className="text-right">
                                    Field Name
                                </Label>
                                <Input
                                    id="fieldName"
                                    value={fieldName}
                                    onChange={(e) => setFieldName(e.target.value)}
                                    className="col-span-3"
                                    placeholder="Enter field name"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="cropName" className="text-right">
                                    Crop Name
                                </Label>
                                <Input
                                    id="cropName"
                                    value={cropName}
                                    onChange={(e) => setCropName(e.target.value)}
                                    className="col-span-3"
                                    placeholder="Enter crop name"
                                />
                            </div>
                            {/* <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="comments" className="text-right">
                                    Comments
                                </Label>
                                <Input
                                    id="comments"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                    className="col-span-3"
                                    placeholder="Write any comments"
                                />
                            </div> */}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="startedInfo" className="text-right">
                                    When/How Started?
                                </Label>
                                <Input
                                    id="startedInfo"
                                    value={startedInfo}
                                    onChange={(e) => setStartedInfo(e.target.value)}
                                    className="col-span-3"
                                    placeholder="How did you start this crop?"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="currentStatus" className="text-right">
                                    Current Status
                                </Label>
                                <Input
                                    id="currentStatus"
                                    value={currentStatus}
                                    onChange={(e) => setCurrentStatus(e.target.value)}
                                    className="col-span-3"
                                    placeholder="What is the current status?"
                                />
                                {/* <select
                                    id="currentStatus"
                                    value={currentStatus}
                                    onChange={(e) => setCurrentStatus(e.target.value)}
                                    className="col-span-3 px-3 py-2 border border-gray-300 rounded-md"
                                >
                                    <option value="">Select status</option>
                                    <option value="Planted">Planted</option>
                                    <option value="Growing">Growing</option>
                                    <option value="Flowering">Flowering</option>
                                    <option value="Harvesting">Harvesting</option>
                                    <option value="Harvested">Harvested</option>
                                </select> */}
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="hubCode" className="text-right">
                                    Hub Code
                                </Label>
                                <Input
                                    id="hubCode"
                                    value={hubCode}
                                    onChange={(e) => setHubCode(e.target.value)}
                                    className="col-span-3"
                                    placeholder="Enter hub code"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">
                                    Location
                                </Label>
                                <div className="col-span-3">
                                    <Button
                                        type="button"
                                        onClick={getCurrentLocation}
                                        variant="outline"
                                        className="w-full"
                                    >
                                        Get Current Location
                                    </Button>
                                    {location.lat && location.lng && (
                                        <p className="text-sm text-gray-500 mt-2">
                                            Lat: {location.lat.toFixed(6)}, Lng: {location.lng.toFixed(6)}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" onClick={handleAddField}>
                                Add Field
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="rounded-lg border border-gray-200 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-50">
                            <TableHead className="font-semibold">Field ID</TableHead>
                            <TableHead className="font-semibold">Field Name</TableHead>
                            <TableHead className="font-semibold">Crop Name</TableHead>
                            <TableHead className="font-semibold">Created At</TableHead>
                            {/* <TableHead className="font-semibold">Notifications</TableHead> */}
                            <TableHead className="font-semibold">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fields.map((field) => (
                            <TableRow
                                key={field.fieldId}
                                className="cursor-pointer hover:bg-gray-50"
                                onClick={() => handleFieldClick(field)}
                            >
                                <TableCell className="font-medium">{field.fieldId}</TableCell>
                                <TableCell className="font-medium">{field.fieldName}</TableCell>
                                <TableCell>{field.cropName}</TableCell>
                                <TableCell>{field.timestamp && formatDateTime(field.timestamp)}</TableCell>
                                {/* <TableCell>
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                        <Bell className="h-3 w-3" />
                                        {field.notifications}
                                    </Badge>
                                </TableCell> */}
                                <TableCell>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteField(field.fieldId);
                                        }}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    </>)
}