import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { GamepadIcon, BarChart3 } from 'lucide-react';

interface ProductActionModalProps {
  product: {
    title: string;
    id: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onGamify: () => void;
  onAnalysis: () => void;
  onModules: () => void;
}

const ProductActionModal: React.FC<ProductActionModalProps> = ({ 
  product, 
  isOpen, 
  onClose, 
  onGamify, 
  onAnalysis,
  onModules
}) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center"></DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Button
            onClick={onGamify}
            className="w-full h-16 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <GamepadIcon className="h-6 w-6 mr-3" />
            <div className="text-left">
              <div className="font-semibold">Story Telling</div>
              <div className="text-sm opacity-90">Interactive conversations</div>
            </div>
          </Button>
          
          <Button
            onClick={onAnalysis}
            className="w-full h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <BarChart3 className="h-6 w-6 mr-3" />
            <div className="text-left">
              <div className="font-semibold">Analysis</div>
              <div className="text-sm opacity-90">Detailed insights & data</div>
            </div>
          </Button>
          
          <Button
            onClick={onModules}
            className="w-full h-16 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <BarChart3 className="h-6 w-6 mr-3" />
            <div className="text-left">
              <div className="font-semibold">Financial Modules</div>
              <div className="text-sm opacity-90">Step-by-step learning</div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductActionModal;