
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Volume2, VolumeX } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useApp } from "@/store/AppContext";

interface ConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowFlowchart: () => void;
}

const ConversationModal = ({ isOpen, onClose, onShowFlowchart }: ConversationModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [autoProgress, setAutoProgress] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(true);

  const typingTimerRef = useRef<NodeJS.Timeout>();
  const autoProgressTimerRef = useRef<NodeJS.Timeout>();
  const speechRef = useRef<SpeechSynthesisUtterance>();

  const appContext = useApp();
  const product: {
    title: string;
    conversations: Array<{
      speaker: string;
      message: string;
    }>;
  } = appContext.conversationData;

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setDisplayedText("");
      setIsTyping(false);
      setAutoProgress(true);
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    stopSpeech();
    onClose();
  }

  useEffect(() => {
    if (currentStep < product.conversations.length) {
      const currentMessage = product.conversations[currentStep].message;
      setDisplayedText("");
      setIsTyping(true);

      let charIndex = 0;
      const typeNextChar = () => {
        if (charIndex < currentMessage.length) {
          setDisplayedText(currentMessage.slice(0, charIndex + 1));
          charIndex++;
          typingTimerRef.current = setTimeout(typeNextChar, 30 + Math.random() * 20);
        } else {
          setIsTyping(false);
          if (autoProgress && currentStep < product.conversations.length - 1) {
            autoProgressTimerRef.current = setTimeout(() => {
              handleNext();
            }, 3500);
          }
        }
      };

      // Small delay before starting typing
      setTimeout(() => {
        typeNextChar();

        if (speechEnabled) {
          const isBankOfficer = product.conversations[currentStep].speaker.toLowerCase().includes("bank");
          speakText(currentMessage, isBankOfficer ? "male" : "female");
        }
      }, 500);
    }

    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
      if (autoProgressTimerRef.current) {
        clearTimeout(autoProgressTimerRef.current);
      }
    };
  }, [currentStep, product.conversations.length, autoProgress, speechEnabled]);

  const speakText = (text: string, gender: "male" | "female" = "female") => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      const genderKeywords = gender === "female" ? ["female", "woman", "zira", "hazel", "susan", "emma", "amy", "google"]
      : ["male", "man", "david", "mark", "mike", "george", "alex", "daniel"];

      const selectedVoice = voices.find(voice => genderKeywords.some(keyword => voice.name.toLowerCase().includes(keyword)));

      if (selectedVoice) utterance.voice = selectedVoice;
      else utterance.pitch = gender === "female" ? 1.2 : 0.9;

      utterance.rate = 0.9;
      utterance.volume = 0.8;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleNext = () => {
    if (autoProgressTimerRef.current) {
      clearTimeout(autoProgressTimerRef.current);
    }
    stopSpeech();

    if (currentStep < product.conversations.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (autoProgressTimerRef.current) {
      clearTimeout(autoProgressTimerRef.current);
    }
    stopSpeech();

    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleSpeech = () => {
    setSpeechEnabled(!speechEnabled);
    if (isSpeaking) {
      stopSpeech();
    }
  };

  const handleShowFlowchart = () => {
    stopSpeech();
    onShowFlowchart();
  }

  const currentConversation = product.conversations[currentStep];
  const isConversationComplete = currentStep === product.conversations.length - 1;
  const isUser = !currentConversation?.speaker.toLowerCase().includes("bank");

  const AnimatedAvatar = ({ isUser, isActive }: { isUser: boolean; isActive: boolean }) => (
    <div className={`relative ${isActive ? 'animate-pulse' : ''}`}>
      <Avatar className={`w-12 h-12 ring-4 ${isUser ? 'ring-green-200' : 'ring-blue-200'} ${isActive ? 'ring-opacity-100 animate-bounce' : 'ring-opacity-50'} transition-all duration-300`}>
        <AvatarFallback className={`${isUser ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} font-bold text-lg`}>
          {isUser ? '👨‍🌾' : '🏦'}
        </AvatarFallback>
      </Avatar>
      {isActive && (
        <div className="absolute -top-1 -right-1 w-4 h-4">
          <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-full h-full bg-green-500 rounded-full"></div>
        </div>
      )}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-green-50 to-blue-50">
        <DialogHeader className="border-b border-gray-200 pb-4">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {product.title}
          </DialogTitle>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAutoProgress(!autoProgress)}
                className={autoProgress ? "bg-green-50 border-green-200" : ""}
              >
                {autoProgress ? "Auto Mode ON" : "Manual Mode"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleSpeech}
                className={speechEnabled ? "bg-blue-50 border-blue-200" : ""}
              >
                {speechEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
            </div>
            <div className="text-sm text-gray-500">
              Step {currentStep + 1} of {product.conversations.length}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-6">
          {/* Current Conversation */}
          {currentConversation && (
            <Card className={`${isUser
              ? 'bg-gradient-to-r from-green-50 to-green-100 border-green-200'
              : 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200'
              } animate-fade-in shadow-lg`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AnimatedAvatar isUser={isUser} isActive={true} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <p className="font-bold text-lg">{currentConversation.speaker}</p>
                      {isTyping && (
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      )}
                      {isSpeaking && (
                        <div className="flex items-center space-x-1 text-blue-600">
                          <Volume2 className="h-4 w-4 animate-pulse" />
                          <span className="text-sm">Speaking...</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-800 text-lg leading-relaxed">
                      {displayedText}
                      {isTyping && <span className="animate-pulse">|</span>}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Previous Messages Preview */}
          {currentStep > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Previous Messages</h4>
              <div className="grid grid-cols-2 gap-3">
                {product.conversations.slice(Math.max(0, currentStep - 2), currentStep).map((conv, index) => {
                  const actualIndex = Math.max(0, currentStep - 2) + index;
                  const isConvUser = !conv.speaker.toLowerCase().includes('bank');
                  return (
                    <Card key={actualIndex} className={`${isConvUser ? 'bg-green-50/50 border-green-100' : 'bg-blue-50/50 border-blue-100'
                      } opacity-70 hover:opacity-100 transition-opacity cursor-pointer`} onClick={() => setCurrentStep(actualIndex)}>
                      <CardContent className="p-3">
                        <div className="flex items-start space-x-2">
                          <AnimatedAvatar isUser={isConvUser} isActive={false} />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{conv.speaker}</p>
                            <p className="text-gray-600 text-sm line-clamp-2">{conv.message}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 py-4">
            {product.conversations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentStep
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 scale-125'
                  : index < currentStep
                    ? 'bg-green-400'
                    : 'bg-gray-200 hover:bg-gray-300'
                  }`}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-4">
              <Button
                onClick={handleShowFlowchart}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
              >
                Generate Flow
              </Button>

              {!isConversationComplete ? (
                <Button
                  onClick={handleNext}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button variant="outline" onClick={handleCloseModal}>
                  Close
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConversationModal;
