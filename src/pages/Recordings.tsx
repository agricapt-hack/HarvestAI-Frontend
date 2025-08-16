import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useApp } from "@/store/AppContext";
import { useUser } from "@clerk/clerk-react";
import { Building, FileAudio, Pause, Play, Users, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface AudioRecording {
    id: string;
    title: string;
    description: string;
    duration: string;
    type: 'bank' | 'customer';
    timestamp: string;
    summary?: string;
    audioUrl?: string;
}

const Recordings = () => {
    const [playingId, setPlayingId] = useState<string | null>(null);
    const [isGeneratingSummary, setIsGeneratingSummary] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);
    const { toast } = useToast();
    const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

    const { t } = useTranslation();
    const appContext = useApp();
    const { user } = useUser();

    const audioRecordings: AudioRecording[] = [
        {
            id: "1",
            title: "Recording_2025-01-15_13-30.mp3",
            description: "loan-application-discussion.mp3",
            duration: "3:42",
            type: "customer",
            timestamp: "2025-01-15 13:30",
            audioUrl: "audio.mp3"
        },
        {
            id: "2",
            title: "Recording_2024-01-15_11-15.mp3",
            description: "Bank officer explaining crop insurance benefits",
            duration: "5:12",
            type: "bank",
            timestamp: "2024-01-15 11:15",
            audioUrl: "/api/audio/insurance-explanation.mp3"
        },
        {
            id: "3",
            title: "Recording_2024-01-14_16-45.mp3",
            description: "Step-by-step guide for savings account creation",
            duration: "4:38",
            type: "bank",
            timestamp: "2024-01-14 16:45",
            audioUrl: "/api/audio/account-opening.mp3"
        },
        {
            id: "4",
            title: "Recording_2024-01-14_09-20.mp3",
            description: "Farmer sharing experience with loan process",
            duration: "2:56",
            type: "customer",
            timestamp: "2024-01-14 09:20",
            audioUrl: "/api/audio/customer-feedback.mp3"
        },
        {
            id: "5",
            title: "Recording_2024-01-13_13-10.mp3",
            description: "Bank evaluation of customer's loan eligibility",
            duration: "6:14",
            type: "bank",
            timestamp: "2024-01-13 13:10",
            audioUrl: "/api/audio/risk-assessment.mp3"
        },
        {
            id: "6",
            title: "Recording_2024-01-13_10-30.mp3",
            description: "Customer asking about required documents",
            duration: "3:47",
            type: "customer",
            timestamp: "2024-01-13 10:30",
            audioUrl: "/api/audio/documentation-guide.mp3"
        }
    ];

    const [recordings, setRecordings] = useState(audioRecordings);

    useEffect(() => {
        recordings.forEach(recording => {
            if (!audioRefs.current[recording.id]) {
                audioRefs.current[recording.id] = new Audio(recording.audioUrl);
            }
        });
    }, [recordings]);

    const speakText = (text: string) => {
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(text);
            const voices = speechSynthesis.getVoices();
            console.log(voices);

            // Find a female voice
            const femaleVoice = voices.find(voice =>
                voice.name.toLowerCase().includes('female') ||
                voice.name.toLowerCase().includes('woman') ||
                voice.name.toLowerCase().includes('zira') ||
                voice.name.toLowerCase().includes('hazel') ||
                voice.name.toLowerCase().includes('susan') ||
                voice.name.toLowerCase().includes('google')
            );

            if (femaleVoice) {
                utterance.voice = femaleVoice;
            } else {
                utterance.pitch = 1.2;
            }

            utterance.rate = 0.9;
            utterance.volume = 0.8;
            speechSynthesis.speak(utterance);
        }
    };

    const generateSummary = (recording: AudioRecording): string => {
        const summaries: Record<string, string> = {
            "1": "A woman named Nisha from HDFC Bank contacts a man to discuss a potential business loan, but the call quickly takes a comical turn. The man humorously claims he needs the loan to buy a train, leaving Nisha momentarily stunned. As she asks about his business, he jokingly states that he sells samosas worth ₹1500 daily and that his venture has been running for 300 years. He adds that he operates from a roadside stall in Janakpuri and doesn’t have a proper bank account. The entire exchange is filled with witty, exaggerated remarks from the man, keeping the tone light and amusing. The call ends with Nisha saying she'll speak with her seniors and get back to him, while the man cheerfully urges her to proceed with the loan.",
            "2": "The bank officer provided comprehensive information about crop insurance policies. The explanation covered premium calculation methods, coverage amounts based on crop types, and claim settlement procedures. Key points included government subsidies reducing farmer premium burden by 50-80%, weather-based insurance vs. yield-based insurance options, and the importance of timely enrollment before sowing season. The officer emphasized that crop insurance protects against natural calamities like drought, flood, and pest attacks.",
            "3": "This recording guides customers through the savings account opening process. The step-by-step explanation covers required documentation, minimum balance requirements, and available account types. The process includes visiting the branch, filling application forms, submitting KYC documents, and making initial deposit. Additional services like debit card issuance, mobile banking activation, and internet banking setup were discussed. The officer highlighted zero balance account options for farmers under PM-KISAN scheme.",
            "4": "Customer shared positive feedback about the loan disbursement process, praising the quick approval within 15 days and helpful staff guidance. The farmer mentioned how the loan helped expand agricultural operations and increase crop yield by 30%. Constructive feedback included suggestions for more flexible repayment schedules during harvest seasons and better communication about interest rate changes. Overall satisfaction rating was 4.5/5 stars.",
            "5": "Bank's risk assessment interview evaluated the customer's creditworthiness and loan repayment capacity. The assessment covered income verification, existing debt obligations, agricultural experience, and land ownership details. Credit score analysis showed good standing with previous loan repayments. Risk factors identified included dependency on monsoon patterns and market price fluctuations. The final recommendation approved the loan with standard terms and conditions.",
            "6": "Customer consultation about documentation requirements for loan application. The guidance covered essential documents like land records, income certificates, and business licenses. The officer explained the importance of each document and provided tips for quick processing. Alternative documentation for informal businesses was discussed, including sales receipts and supplier invoices. The session also covered document verification timeline and common rejection reasons."
        };

        return summaries[recording.id] || "This audio recording contains important information about banking services and customer interactions. The conversation covers various aspects of financial products, eligibility criteria, and procedural guidelines that help customers understand banking processes better.";
    };

    const handlePlayPause = (id: string) => {
        const audio = audioRefs.current[id];

        if (!audio) return;

        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
        }

        if (playingId === id) {
            audio.pause();
            setPlayingId(null);
        } else {
            if (playingId && audioRefs.current[playingId]) {
                audioRefs.current[playingId]?.pause();
                audioRefs.current[playingId]!.currentTime = 0;
            }

            audio.play();
            setPlayingId(id);

            audio.onended = () => {
                setPlayingId(null);
            };
        };
    }

    const handleGenerateSummary = async (recording: AudioRecording) => {
        setIsGeneratingSummary(recording.id);
        setProgress(0);

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 90) {
                    clearInterval(progressInterval);
                    return 90;
                }
                return prev + Math.random() * 15;
            });
        }, 200);

        setTimeout(() => {
            clearInterval(progressInterval);
            setProgress(100);

            const summary = generateSummary(recording);

            setRecordings(prev =>
                prev.map(r =>
                    r.id === recording.id
                        ? { ...r, summary }
                        : r
                )
            );

            setTimeout(() => {
                setIsGeneratingSummary(null);
                setProgress(0);

                toast({
                    title: "Summary Generated",
                    description: "The audio summary has been generated and will be spoken aloud.",
                });

                speakText(summary);
            }, 500);
        }, 3000);
    };

    const getTypeIcon = (type: string) => {
        return type === 'bank' ? Building : Users;
    };

    const getTypeColor = (type: string) => {
        return type === 'bank' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
            <Navbar onLoginClick={appContext.handleLoginClick} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
                        {/* {t('recordingsHeading')} */}
                        Audio Recordings & Summaries
                    </h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        {/* {t('recordingsDescription')} */}
                        Listen to your previous audio recordings, generate AI-powered summaries
                    </p>
                </div>

                {!user && <h2 className="text-center text-2xl font-semibold text-gray-500">No Recordings found</h2>}
                {user && <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recordings.map((recording) => {
                        const TypeIcon = getTypeIcon(recording.type);
                        const isPlaying = playingId === recording.id;
                        const isProcessing = isGeneratingSummary === recording.id;

                        return (
                            <Card key={recording.id} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                                <CardHeader className="space-y-1">
                                    <CardTitle className="text-lg">{recording.title}</CardTitle>
                                    <CardDescription className="text-sm">
                                        {/* {recording.description} */}
                                    </CardDescription>
                                    <p className="text-xs text-muted-foreground">
                                        {recording.timestamp}
                                    </p>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between space-x-2 pr-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handlePlayPause(recording.id)}
                                            className="flex items-center space-x-1"
                                        >
                                            {isPlaying ? (
                                                <Pause className="h-4 w-4" />
                                            ) : (
                                                <Play className="h-4 w-4" />
                                            )}
                                            <span>{isPlaying ? 'Pause' : 'Play'}</span>
                                        </Button>
                                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                            <FileAudio className="h-4 w-4" />
                                            <span>{recording.duration}</span>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={() => handleGenerateSummary(recording)}
                                        disabled={isProcessing || !!recording.summary}
                                        className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                                    >
                                        {isProcessing ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                <span>Generating Summary...</span>
                                            </div>
                                        ) : recording.summary ? (
                                            'Summary Generated ✓'
                                        ) : (
                                            'Generate Summary'
                                        )}
                                    </Button>

                                    {isProcessing && (
                                        <div className="space-y-2">
                                            <Progress value={progress} className="w-full" />
                                            <p className="text-xs text-center text-muted-foreground">
                                                Processing audio... {Math.round(progress)}%
                                            </p>
                                        </div>
                                    )}

                                    {recording.summary && (
                                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-semibold text-sm">AI Generated Summary</h4>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => speakText(recording.summary!)}
                                                    className="h-6 w-6 p-0"
                                                >
                                                    <Volume2 className="h-3 w-3" />
                                                </Button>
                                            </div>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                {recording.summary}
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>}
            </div>
        </div>
    );
};

export default Recordings;