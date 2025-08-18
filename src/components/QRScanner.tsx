import { useEffect, useRef, useState } from "react";
import { Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import QrScanner from "qr-scanner";

interface QRScannerProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (value: string) => void;
}

const QRScanner = ({ isOpen, onClose, onScan }: QRScannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [qrScanner, setQrScanner] = useState<QrScanner | null>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        startScanning();
      }, 300); // wait for Dialog to mount
      return () => clearTimeout(timer);
    } else {
      stopScanning();
    }
  }, [isOpen]);

  const startScanning = async () => {
    console.log(videoRef);
    // if (!videoRef.current) return;

    try {
      // Wait a tick to ensure <video> is mounted in the DOM
      await new Promise((resolve) => setTimeout(resolve, 200));

      const hasCamera = await QrScanner.hasCamera();
      if (!hasCamera) {
        console.error("No camera found on this device");
        return;
      }

      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          onScan(result.data);
          handleClose();
        },
        {
          // don't rely solely on preferredCamera
          preferredCamera: "environment",
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      await scanner.start();
      setQrScanner(scanner);
      setIsScanning(true);
    } catch (error) {
      console.error("Error starting QR scanner:", error);
      // fallback attempt
      try {
        const scanner = new QrScanner(
          videoRef.current!,
          (result) => {
            onScan(result.data);
            handleClose();
          },
          {
            preferredCamera: "user",
            highlightScanRegion: true,
            highlightCodeOutline: true,
          }
        );
        await scanner.start();
        setQrScanner(scanner);
        setIsScanning(true);
      } catch (fallbackError) {
        console.error("Error starting QR scanner with front camera:", fallbackError);
      }
    }
  };

  const stopScanning = () => {
    if (qrScanner) {
      qrScanner.destroy();
      setQrScanner(null);
    }
    setIsScanning(false);
  };


  const handleClose = () => {
    stopScanning();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Scan QR Code
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-64 object-cover"
              playsInline
              muted
            />
          </div>

          <div className="text-center text-sm text-muted-foreground">
            {isScanning ? "Position the QR code in front of the camera" : "Starting camera..."}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleClose}
              variant="outline"
              className="w-full"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRScanner;