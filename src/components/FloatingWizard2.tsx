import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, MessageCircle, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Chatbot } from './Chatbot';
import { Chatbot2 } from './Chatbot2';

export const FloatingWizard2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="right-8">
                <Button
                    onClick={() => setIsOpen(true)}
                    size="lg"
                    className="px-6 py-4 rounded-xl transition-all duration-300 animate-float group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white flex items-center gap-2"
                >
                    <Sparkles className="h-6 w-6 transition-transform group-hover:scale-110" />
                    <span className="text-sm font-medium">Farm Assistant</span>
                </Button>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-2xl h-[80vh] p-0 overflow-hidden bg-gradient-card border-primary/20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
                    <DialogHeader className="p-6 pb-0">
                        <div className="flex items-center justify-between">
                            <DialogTitle className="flex items-center gap-3 text-xl font-semibold bg-gradient-primary bg-clip-text ">
                                <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                                    <MessageCircle className="h-5 w-5 text-white" />
                                </div>
                                Harvest.AI Assistant
                            </DialogTitle>
                        </div>
                        <p className="text-muted-foreground text-sm text-white">
                            Your AI-powered financial advisor. Ask me anything or use voice commands!
                        </p>
                    </DialogHeader>

                    <div className="flex-1 overflow-hidden">
                        <Chatbot2 />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};