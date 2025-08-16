
import React, { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';
import LoadingModal from './LoadingModal';
import { useToast } from '@/hooks/use-toast';
import { Upload, CheckCircle } from 'lucide-react';
import '@xyflow/react/dist/style.css';
import { useApp } from '@/store/AppContext';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { convertGamifyConversations } from '@/lib/convertors';
import { useFinancialProducts } from '@/lib/useFinancialProducts';
import FileUploadSection from './FileUploadSection';

interface FlowchartModalProps {
  product: {
    title: string;
    flow_steps: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  isOpen: boolean;
  onClose: () => void;
}

const FlowchartModal: React.FC<FlowchartModalProps> = ({ isOpen, onClose }) => {
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({});
  const [newPrompt, setNewPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const instructionsRef = useRef<string[]>([]);

  const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
  const appContext = useApp();
  const product = appContext.conversationData;
  const { user } = useUser();
  const financialProducts = useFinancialProducts();

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  const explainWorkflow = () => {
    // const explanation = `Here's how to ${product.title}: ${product.flow_steps.map((step, index) => 
    //   `Step ${index + 1}: ${step.title}. ${step.description}.`
    // ).join(' ')}`
    const explanation = product.flow_description;

    alert(explanation);
    
    // Voice explanation using Web Speech API
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(explanation);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const handleFileUpload = (stepId: string, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [stepId]: file }));
    toast({
      title: "File uploaded",
      description: `${file.name} uploaded for step ${stepId}`,
    });
  };

  const handleVerifyDocument = (stepId: string) => {
    const file = uploadedFiles[stepId];
    if (!file) {
      toast({
        title: "No file uploaded",
        description: "Please upload a file first",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Document verified",
      description: `${file.name} has been verified successfully`,
    });
  };

  const handleGenerateWorkflow = async () => {
    if (!newPrompt.trim()) {
      toast({
        title: "Enter a prompt",
        description: "Please enter a prompt to generate a new workflow",
        variant: "destructive",
      });
      return;
    }
    instructionsRef.current.push(newPrompt);

    const response = await axios.post(`${BASE_URL}/gamify`, {
      customer_id: user?.username,
      product_id: product.id,
      instructions: instructionsRef.current
    });

    const convertedData = convertGamifyConversations(response.data);
    console.log("Product Conversation Data:", convertedData);
    const currentProductInfo = financialProducts.find(productInfo => productInfo.id === product.id);
    appContext.updateConversationData({...convertedData, ...currentProductInfo});

    
    setIsGenerating(true);
  };

  const handleGenerationComplete = () => {
    setIsGenerating(false);

    toast({
      title: "Workflow generated",
      description: `New workflow created from prompt: "${newPrompt}"`,
    });
    setNewPrompt('');
  };
  // Create nodes from flow steps
  const nodes: Node[] = product.flow_steps.map((step, index) => ({
    id: step.id,
    type: 'default',
    position: { x: index * 250, y: 100 },
    data: {
      label: (
        <div className="flex justify-center items-center flex-col text-center p-3 space-y-3">
          <div className="font-semibold text-xl mb-1">{step.title}</div>
          <div className="text-lg text-gray-600 mb-2">{step.description}</div>
          {/* &nbsp;
          <div className="space-y-2">
            <input
              type="file"
              id={`file-${step.id}`}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileUpload(step.id, file);
              }}
            />
            <label
              htmlFor={`file-${step.id}`}
              className="flex items-center justify-center gap-1 px-2 py-1 bg-blue-50 border border-blue-200 rounded text-xs cursor-pointer hover:bg-blue-100"
            >
              <Upload className="w-3 h-3" />
              {uploadedFiles[step.id] ? uploadedFiles[step.id]?.name.slice(0, 15) + '...' : 'Upload File'}
            </label>
            
            <button
              onClick={() => handleVerifyDocument(step.id)}
              className="flex items-center justify-center gap-1 w-full px-2 py-1 bg-green-50 border border-green-200 rounded text-xs hover:bg-green-100"
            >
              <CheckCircle className="w-3 h-3" />
              Verify Document
            </button>
          </div> */}
        </div>
      ),
    },
    style: {
      width: 220,
      height: 180,
      background: '#ffffff',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '12px',
    },
  }));

  // Create edges to connect the nodes
  const edges: Edge[] = product.flow_steps.slice(0, -1).map((_, index) => ({
    id: `e${index}-${index + 1}`,
    source: (index + 1).toString(),
    target: (index + 2).toString(),
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
  }));

  const handleCloseDialog = () => {
    stopSpeech();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseDialog}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center mb-4">
            {product.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="h-[500px] w-full border rounded-lg">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            attributionPosition="bottom-left"
          >
            <Background gap={20} size={1} />
            <Controls />
          </ReactFlow>
        </div>
        
        {/* Prompt Generation Section */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-semibold mb-3">Generate New Workflow</h4>
          <div className="flex gap-2">
            <Input
              placeholder="Enter prompt for new workflow..."
              value={newPrompt}
              onChange={(e) => setNewPrompt(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleGenerateWorkflow}
              disabled={!newPrompt.trim()}
              className="px-4"
            >
              Generate
            </Button>
          </div>
        </div>

        
        <div className="flex justify-center mt-4 space-x-4">
          <Button 
            onClick={() => explainWorkflow()} 
            className="px-6 bg-blue-600 hover:bg-blue-700"
          >
            🔊 Explain Workflow
          </Button>
        </div>
        
        <FileUploadSection />
        
        <LoadingModal 
          isOpen={isGenerating} 
          onComplete={handleGenerationComplete} 
        />
      </DialogContent>
    </Dialog>
  );
};

export default FlowchartModal;
