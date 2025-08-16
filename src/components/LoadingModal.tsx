import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Sparkles, Zap, Stars, Brain } from 'lucide-react';
import { DialogTitle } from '@radix-ui/react-dialog';

interface LoadingModalProps {
  isOpen: boolean;
  onComplete: () => void;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isOpen, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: Brain, text: "Analyzing your request...", color: "text-purple-500" },
    { icon: Sparkles, text: "Generating conversation...", color: "text-blue-500" },
    { icon: Zap, text: "Preparing AI magic...", color: "text-green-500" },
    { icon: Stars, text: "Almost ready!", color: "text-yellow-500" }
  ];

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setTimeout(onComplete, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 750);

    return () => clearInterval(interval);
  }, [isOpen, onComplete]);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
    }
  }, [isOpen]);

  const CurrentIcon = steps[currentStep]?.icon || Brain;

  return (
    <Dialog open={isOpen} onOpenChange={() => { }}>
      <DialogContent className="max-w-md bg-white/90 backdrop-blur-md border-none shadow-2xl">
        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        </DialogTitle>
        <div className="flex flex-col items-center justify-center py-8 px-4">
          {/* Animated Icon */}
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center animate-pulse">
              <CurrentIcon className={`h-10 w-10 ${steps[currentStep]?.color} animate-bounce`} />
            </div>

            {/* Magic particles */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1 -left-3 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-500"></div>
          </div>

          {/* Loading Text */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
            {steps[currentStep]?.text || "Loading..."}
          </h3>

          {/* Progress Bar */}
          <div className="w-full max-w-xs bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-6 h-6 bg-purple-200 rounded-full opacity-50 animate-float-slow"></div>
            <div className="absolute top-20 right-15 w-4 h-4 bg-blue-200 rounded-full opacity-40 animate-float-medium"></div>
            <div className="absolute bottom-15 left-20 w-5 h-5 bg-green-200 rounded-full opacity-30 animate-float-fast"></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;