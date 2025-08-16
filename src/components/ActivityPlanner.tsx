import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { IdeasModal } from '@/components/ui/ideas-modal';
import { Target, Sparkles, Mic, MicOff } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { useApp } from '@/store/AppContext';
import FullPageLoader from './FullPageLoader';
import { useTranslation } from 'react-i18next';

interface ActivityData {
    pastActivity: string;
    presentActivity: string;
    futureAmbition: string;
}

export const ActivityPlanner = () => {
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
    const BASE_URL2 = import.meta.env.VITE_BACKEND_BASE_URL2;
    const [isOpen, setIsOpen] = useState(false);
    const [ideasModalOpen, setIdeasModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState<{ [key: string]: boolean }>({});
    const [activityData, setActivityData] = useState<ActivityData>({
        pastActivity: '',
        presentActivity: '',
        futureAmbition: ''
    });
    const appContext = useApp();
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const { t } = useTranslation();

    const recognitionRef = useRef<any>(null);
    const { user } = useUser();

    useEffect(() => {
        if (user?.username) {
            axios.get(`${BASE_URL}/users/${user?.username}`).then((res) => {
                const userDetails = res.data;
                console.log(res.data);
                setActivityData({
                    presentActivity: userDetails?.activity?.present,
                    pastActivity: userDetails?.activity?.past,
                    futureAmbition: userDetails?.activity?.future,
                });
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [user])

    const startVoiceInput = (field: keyof ActivityData) => {
        if (!('webkitSpeechRecognition' in window)) {
            toast({
                title: "Voice Input Not Supported",
                description: "Your browser doesn't support voice input.",
                variant: "destructive"
            });
            return;
        }

        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            setIsListening(prev => ({ ...prev, [field]: true }));
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            handleInputChange(field, activityData[field] + ' ' + transcript);
        };

        recognition.onerror = () => {
            toast({
                title: "Voice Input Error",
                description: "Could not capture voice input. Please try again.",
                variant: "destructive"
            });
        };

        recognition.onend = () => {
            setIsListening(prev => ({ ...prev, [field]: false }));
        };

        recognitionRef.current = recognition;
        recognition.start();
    };

    const stopVoiceInput = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
    };

    const handleInputChange = (field: keyof ActivityData, value: string) => {
        setActivityData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const generateRecommendations = () => {
        if (!activityData.pastActivity || !activityData.presentActivity || !activityData.futureAmbition) {
            toast({
                title: "Missing Information",
                description: "Please fill in all fields to generate personalized recommendations.",
                variant: "destructive"
            });
            return;
        }

        if(!user) {
            toast({
                title: "Authentication Failed",
                description: "Login first to generate personalized ideas",
                variant: "destructive"
            });
            return;
        }
        setRecommendedProducts([]);
        
        // axios.post(`${BASE_URL}/generate-idea`, {
            //     customer_id: user?.username,
        //     activity: {
        //         past: activityData.pastActivity,
        //         present: activityData.presentActivity,
        //         future: activityData.futureAmbition
        //     }
        // }).then((response) => {
        //     setRecommendedProducts(response.data.products);
        // }).catch((err) => {
            //     console.log(err);
            // });
        setIsOpen(false);
        setIsLoading(true);
        axios.post(`${BASE_URL2}/api/idea/recom-idea`, {
            user_id: user.username,
            past: activityData.pastActivity,
            present: activityData.presentActivity,
            future: activityData.futureAmbition
        }).then((res)=>{
            console.log(res.data.ideas);
            setRecommendedProducts(res.data.ideas);
        }).catch((err) => {
            console.log(err);
        }).finally(()=>{
            setIsLoading(false);
        })

        setIdeasModalOpen(true);
    };

    return (
        <section className='flex justify-center items-center' id="activityPlanner">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center shadow-sm hover:opacity-90 text-accent-foreground border-accent/30 text-white hover:from-green-600 hover:to-blue-600 hover:text-white"
                    >
                        <Sparkles className="h-4 w-4 mr-2" />
                        {t("activityPlanner")}
                    </Button>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card border-primary/20 bg-green-50">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-3 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-700">
                            MSME Planner
                        </DialogTitle>
                        <p className="text-muted-foreground">
                            Share your financial journey to receive personalized recommendations and scenarios.
                        </p>
                    </DialogHeader>

                    <div className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="past" className="text-sm font-semibold text-foreground">
                                    Past Financial Activity
                                </Label>
                                <div className="relative">
                                    <Textarea
                                        id="past"
                                        placeholder="Previous financial habits, investments..."
                                        value={activityData.pastActivity}
                                        onChange={(e) => handleInputChange('pastActivity', e.target.value)}
                                        className="min-h-[80px] bg-background border-border focus:border-primary resize-none text-sm pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute top-2 right-2 p-1 h-6 w-6"
                                        onClick={() => isListening.pastActivity ? stopVoiceInput() : startVoiceInput('pastActivity')}
                                    >
                                        {isListening.pastActivity ? <MicOff className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="present" className="text-sm font-semibold text-foreground">
                                    Present Financial Activity
                                </Label>
                                <div className="relative">
                                    <Textarea
                                        id="present"
                                        placeholder="Current situation, income, expenses..."
                                        value={activityData.presentActivity}
                                        onChange={(e) => handleInputChange('presentActivity', e.target.value)}
                                        className="min-h-[80px] bg-background border-border focus:border-primary resize-none text-sm pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute top-2 right-2 p-1 h-6 w-6"
                                        onClick={() => isListening.presentActivity ? stopVoiceInput() : startVoiceInput('presentActivity')}
                                    >
                                        {isListening.presentActivity ? <MicOff className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="future" className="text-sm font-semibold text-foreground">
                                    Future Financial Ambitions
                                </Label>
                                <div className="relative">
                                    <Textarea
                                        id="future"
                                        placeholder="Goals, dreams, 5-10 year plans..."
                                        value={activityData.futureAmbition}
                                        onChange={(e) => handleInputChange('futureAmbition', e.target.value)}
                                        className="min-h-[80px] bg-background border-border focus:border-primary resize-none text-sm pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute top-2 right-2 p-1 h-6 w-6"
                                        onClick={() => isListening.futureAmbition ? stopVoiceInput() : startVoiceInput('futureAmbition')}
                                    >
                                        {isListening.futureAmbition ? <MicOff className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-center">
                            <Button
                                onClick={generateRecommendations}
                                className="hover:opacity-90 min-w-[150px]"
                            >
                                <Sparkles className="h-4 w-4 mr-2" />
                                Generate Business Ideas
                            </Button>
                        </div>
                    </div>
                </DialogContent>

                {recommendedProducts.length > 0 && <IdeasModal
                    isOpen={ideasModalOpen}
                    onOpenChange={setIdeasModalOpen}
                    activityData={activityData}
                    recommendedProducts={recommendedProducts}
                />}
            </Dialog>
            {isLoading && <FullPageLoader />}
        </section>
    );
};