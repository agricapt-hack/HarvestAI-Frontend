import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mic, MicOff, Send, Bot, User, Volume2 } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';

interface Message {
    id: string;
    type: 'user' | 'bot';
    content: string;
    timestamp: Date;
}

interface ChatbotProps {
    onNavigate: (section: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onNavigate }) => {
    const BASE_URL2 = import.meta.env.VITE_BACKEND_BASE_URL2;
    const BASE_URL_AGRI = import.meta.env.VITE_BACKEND_BASE_URL_AGRI;
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'bot',
            content: "Hello, I am Harvest.AI Assistant. Your personal AI financial advisor — here to answer your queries.",
            timestamp: new Date()
        },
        {
            id: '2',
            type: 'bot',
            content: 'This application is filled with useful tools to help you understand topics like savings, budgeting, credit, and government schemes. I can guide you based on your needs and preferences.',
            timestamp: new Date()
        },
        {
            id: '3',
            type: 'bot',
            content: 'How can I assist you today?',
            timestamp: new Date()
        },
    ]);
    const { user } = useUser();
    const [inputValue, setInputValue] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const [userInstructions, setUserInstructions] = useState([]);

    const { transcript, listening, resetTranscript } = useSpeechRecognition();

    useEffect(() => {
        if (listening) {
            setInputValue(transcript);
        }
    }, [transcript, listening]);

    const startListening = () => SpeechRecognition.startListening({ continuous: true });
    const stopListening = () => SpeechRecognition.stopListening();

    const commandRouteMap: Record<string, string> = {
        "home loan": "/loans#home-loan",
        "home": "/",
        "document verify": "/#docVerify",
        "bank experts": "/#bankExperts",
        "loans": "/loans",
        "accounts": "/accounts",
        "recordings": "/recordings",
        "dashboard": "/dashboard",
        "personal loan": "/loans#personal-loan",
        "business loan": "/loans#business-loan",
        "education loan": "/loans#education-loan",
        "gold loan": "/loans#gold-loan",
        "fd loan": "/loans#fd-loan",
        "savings account": "/accounts#savings-account",
        "salary account": "/accounts#salary-account",
        "current account": "/accounts#current-account",
        "safe deposit locker": "/accounts#safe-deposit-locker",
        "safe custody": "/accounts#safe-custody",
        "sukanya samriddhi": "/accounts#sukanya-samriddhi",
    };

    const commandKeywords: string[] = Object.keys(commandRouteMap);

    useEffect(() => {
        if (scrollAreaRef.current) {
            const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollElement) scrollElement.scrollTop = scrollElement.scrollHeight;
        }
    }, [messages]);

    const addMessage = (type: 'user' | 'bot', content: string) => {
        setMessages(prev => [...prev, { id: Date.now().toString(), type, content, timestamp: new Date() }]);
    };

    // const processMessage = async (userMessage: string) => {
    //     setIsProcessing(true);
    //     const lowerMessage = userMessage.toLowerCase();
    //     const matchedFeature = commandKeywords.find(feature => lowerMessage.includes(feature.toLowerCase()));

    //     let botResponse = '';

    //     if (lowerMessage.includes('help') || lowerMessage.includes('features') || lowerMessage.includes('available')) {
    //         botResponse = `Here are all available features I can help you navigate to: ${commandKeywords}`;
    //     } else if (matchedFeature) {
    //         botResponse = `Navigating to ${matchedFeature}...`;
    //         setTimeout(()=>{
    //             onNavigate(commandRouteMap[matchedFeature]);
    //         }, 3000);
    //     } else {
    //         botResponse = `I'm here to assist with navigation. Try "help" or say "navigate to loans".`;
    //     }

    //     await new Promise(resolve => setTimeout(resolve, 1000));
    //     addMessage('bot', botResponse);
    //     setIsProcessing(false);
    // };
    const processMessage = async (userMessage: string) => {
        setIsProcessing(true);
        const lowerMessage = userMessage.toLowerCase();

        // const instructions = [];
        // instructions.push(lowerMessage);


        // console.log(instructions, user.username);

        if (!user) {
            toast({
                title: "Authentication Failed",
                description: "Login first to chat with our FinanceGPT Assistant",
                variant: "destructive"
            });
            return;
        }

        axios.post(`${BASE_URL_AGRI}/chat/general-chat`, {
            // user_id: user?.username,
            query: lowerMessage
        }).then((res) => {
            const response = res.data.response;
            setIsProcessing(false);
            addMessage('bot', response);
        }).catch((err) => {
            console.log(err);
        })

        // const matchedFeature = commandKeywords.find(feature => lowerMessage.includes(feature.toLowerCase()));

        // let botResponse = '';

        // if (lowerMessage.includes('help') || lowerMessage.includes('features') || lowerMessage.includes('available')) {
        //     botResponse = `Here are all available features I can help you navigate to: ${commandKeywords}`;
        // } else if (matchedFeature) {
        //     botResponse = `Navigating to ${matchedFeature}...`;
        //     setTimeout(() => {
        //         onNavigate(commandRouteMap[matchedFeature]);
        //     }, 3000);
        // } else {
        //     botResponse = `I'm here to assist with navigation. Try "help" or say "navigate to loans".`;
        // }

        // await new Promise(resolve => setTimeout(resolve, 1000));
        // addMessage('bot', botResponse);
        // setIsProcessing(false);
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;
        const userMessage = inputValue.trim();
        setInputValue('');
        resetTranscript();
        addMessage('user', userMessage);
        await processMessage(userMessage);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const speakMessage = (text: string) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1.1;
            speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="flex flex-col h-full bg-green-50">
            <ScrollArea ref={scrollAreaRef} className="flex-1 px-6 py-4 overflow-y-auto space-y-6 max-h-[80vh]">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex items-start gap-3 animate-fade-in-up ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {message.type === 'bot' && (
                            <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                                <Bot className="h-4 w-4 text-white" />
                            </div>
                        )}

                        <div className={`max-w-[75%] ${message.type === 'user' ? 'order-1' : 'order-2'}`}>
                            <div
                                className={`px-4 py-2 rounded-xl shadow-sm text-sm leading-relaxed ${message.type === 'user'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-gray-800 border border-gray-200'}`}
                                    dangerouslySetInnerHTML={{
    __html: message.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  }}
                            >
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-gray-400">
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                                {message.type === 'bot' && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => speakMessage(message.content)}
                                        className="h-6 w-6 p-0 hover:bg-blue-100"
                                    >
                                        <Volume2 className="h-3 w-3" />
                                    </Button>
                                )}
                            </div>
                        </div>

                        {message.type === 'user' && (
                            <div className="h-9 w-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                                <User className="h-4 w-4 text-white" />
                            </div>
                        )}
                    </div>
                ))}

                {isProcessing && (
                    <div className="flex items-start gap-3 animate-fade-in-up">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center shadow-sm">
                            <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                                <span className="text-xs text-gray-500">Typing...</span>
                            </div>
                        </div>
                    </div>
                )}
            </ScrollArea>

            <div className="p-4 border-t border-gray-200 bg-white shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything or use voice command..."
                            className="pr-12 bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 rounded-lg text-black"
                            disabled={isProcessing}
                        />
                    </div>

                    <Button
                        onClick={listening ? stopListening : startListening}
                        variant={listening ? "destructive" : "outline"}
                        size="icon"
                        className={`text-black h-10 w-10 p-0 ${listening ? 'animate-pulse-glow' : ''}`}
                        disabled={isProcessing}
                    >
                        {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </Button>

                    <Button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isProcessing}
                        size="icon"
                        className="h-10 w-10 p-0 bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </div>

                <p className="text-xs text-gray-500 mt-2 text-center italic">
                    💡 Try: "explain crop insurance benefits" or "guide me on soil testing"
                </p>
            </div>
        </div>
    );
};
