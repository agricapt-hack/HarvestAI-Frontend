import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Star, Clock, Award, MessageCircle, Sparkles, MicOff, Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useApp } from '@/store/AppContext';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import FullPageLoader from './FullPageLoader';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface BankStaff {
    id: string;
    name: string;
    position: string;
    specialization: string[];
    phone: string;
    email: string;
    availability: string;
    image: string;
    languages: string[];
}

export const BankContactSection = () => {
    const BASE_URL2 = import.meta.env.VITE_BACKEND_BASE_URL2;
    const [selectedStaff, setSelectedStaff] = useState<BankStaff | null>(null);
    const [filteredStaffs, setFilteredStaffs] = useState<BankStaff[] | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [textInput, setTextInput] = useState("");
    const [isRecommending, setIsRecommending] = useState(false);

    const { transcript, listening, resetTranscript } = useSpeechRecognition();

    const startListening = () => SpeechRecognition.startListening({ continuous: true });
    const stopListening = () => SpeechRecognition.stopListening();

    useEffect(() => {
        if (listening) {
            setTextInput(transcript);
        }
    }, [transcript, listening]);

    const { t } = useTranslation();
    const appContext = useApp();
    const { isSignedIn } = useUser();
    const { user } = useUser();

    const langMap: Record<string, string> = {
        en: 'english',
        hi: 'hindi',
        bn: 'bengali',
        mr: 'marathi',
        kn: 'kannada',
    };

    const bankStaff: BankStaff[] = [
        {
            id: 'bank_expert1',
            name: 'Arindam Halder',
            position: 'Senior Financial Advisor',
            specialization: ['Women\'s Financial Planning', 'Investment Advisory'],
            phone: '+91 1234567890',
            email: 'halderarindam10000@gmail.com',
            availability: 'Mon-Fri 9AM-5PM',
            image: 'arindam.jpg',
            languages: ['English', 'Hindi', 'Bengali']
        },
        {
            id: 'bank_expert2',
            name: 'Debasmit Roy',
            position: 'Business Loan Specialist',
            specialization: ['Small Business Loans', 'Women-Owned Business'],
            phone: '+91 1234567890',
            email: 'ddruk2018@gmail.com',
            availability: 'Mon-Sat 8AM-6PM',
            image: 'debasmit.jpg',
            languages: ['English', 'Hindi']
        },
        {
            id: 'bank_expert3',
            name: 'Vishal Khanapur',
            position: 'Personal Loan Specialist',
            specialization: ['Large Business', 'Startups'],
            phone: '+91 1234567890',
            email: 'vishalmk.ind@gmail.com',
            availability: 'Mon-Sat 8AM-6PM',
            image: 'vishal.jpg',
            languages: ['Marathi', 'Kannada']
        },
        {
            id: 'bank_expert4',
            name: 'Srilekha Mondal',
            position: 'Microfinance Relationship Officer',
            specialization: ['Women Entrepreneurs', 'SHGs'],
            phone: '+91 1234567890',
            email: 'smondaletce05@gmail.com',
            availability: 'Mon-Sat 8AM-5PM',
            image: 'srilekha.jpg',
            languages: ['English', 'Bengali']
        },
        {
            id: 'bank_expert5',
            name: 'Diana Williams',
            position: 'Business Loan Specialist',
            specialization: ['Large Business', 'Startups'],
            phone: '+91 1234567890',
            email: 'Dia.williams1410@gmail.com',
            availability: 'Mon-Sat 8AM-6PM',
            image: 'diana.jpg',
            languages: ['Marathi', 'Kannada']
        },
        {
            id: 'bank_expert6',
            name: 'Nikita Pawar',
            position: 'Senior Citizen Specialist',
            specialization: ['Government Schemes', 'Pension'],
            phone: '+91 1234567890',
            email: 'nikitapawar120603@gmail.com',
            availability: 'Mon-Sat 8AM-6PM',
            image: 'diana.jpg',
            languages: ['Marathi', 'Hindi']
        },
    ];

    const userLang = appContext.language;
    const mappedLang = langMap[userLang.toLowerCase()];
    // const filteredStaff = bankStaff.filter(staff =>
    //     staff.languages.map(lang => lang.toLowerCase()).includes(mappedLang)
    // );

    const handleContactClick = (staff: BankStaff) => {
        setSelectedStaff(staff);
        setIsDialogOpen(true);
    };

    const handleRecommendBankExperts = () => {
        setIsRecommending(true);
        if (!user) {
            toast({
                title: "Authentication Failed",
                description: "Login first to get personalized recommendations from bank experts",
                variant: "destructive"
            });
            return;
        }
        axios.post(`${BASE_URL2}/api/home/suggest-contacts`, {
            user_id: user.username,
            instructions: [textInput],
            language: mappedLang
        }).then((res) => {
            const contacts = res.data.contacts;
            const filteredContacts = bankStaff.filter((staff) => {
                return contacts.includes(staff.id);
            })
            setFilteredStaffs(filteredContacts);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsRecommending(false);
        })
    }

    return (
        <>
            <section className="py-16 px-4 bg-gradient-card" id="bankExperts">
                {isRecommending && <FullPageLoader />}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                            {t('bankContactTitle')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                            {t('bankContactDesc')}
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-10'>
                        <div className='flex justfiy-center'>
                            <input
                                type="text"
                                placeholder="e.g. looking for a loan to start my dairy farm"
                                className="w-full max-w-md px-4 py-2 border border-accent/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition mb-5 textInput"
                                value={textInput}
                                onChange={(e) => { setTextInput(e.target.value) }}
                            />
                            <Button
                                onClick={listening ? stopListening : startListening}
                                variant={listening ? "destructive" : "outline"}
                                size="icon"
                                className={`text-black h-10 w-10 p-0 ${listening ? 'animate-pulse-glow' : ''} ml-3`}
                            >
                                {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                            </Button>
                        </div>
                        <Button
                            variant="outline"
                            className="bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center shadow-sm hover:opacity-90 text-accent-foreground border-accent/30 text-white hover:from-green-600 hover:to-blue-600 hover:text-white"
                            onClick={handleRecommendBankExperts}
                        >
                            <Sparkles className="h-4 w-4 mr-2" />
                            {t("recommendBankExperts")}
                        </Button>
                    </div>

                    {isSignedIn ? <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filteredStaffs && filteredStaffs.map((staff, index) => (
                            <Card
                                key={staff.id}
                                className="bg-background border-primary/10 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in-up cursor-pointer"
                                style={{ animationDelay: `${index * 150}ms` }}
                                onClick={() => handleContactClick(staff)}
                            >
                                <CardHeader className="text-center">
                                    <div className="relative mx-auto mb-4">
                                        <img
                                            src={staff.image}
                                            alt={staff.name}
                                            className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-gradient-primary rounded-full p-1">
                                            <Award className="h-3 w-3 text-white" />
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{staff.name}</CardTitle>
                                    <CardDescription className="text-primary font-medium">
                                        {staff.position}
                                    </CardDescription>

                                    <div className="flex items-center justify-center gap-1 mt-2">
                                        <Star className="h-4 w-4 fill-accent text-accent" />
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-3">
                                    <div className="flex flex-wrap gap-1">
                                        {staff.specialization.slice(0, 2).map((spec, i) => (
                                            <Badge key={i} variant="secondary" className="text-xs">
                                                {spec}
                                            </Badge>
                                        ))}
                                        {staff.specialization.length > 2 && (
                                            <Badge variant="outline" className="text-xs">
                                                +{staff.specialization.length - 2} more
                                            </Badge>
                                        )}
                                    </div>

                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2 ml-2">
                                            <span>{staff.availability}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex gap-2 mb-2">
                                            {staff.languages.map((lang, i) => (
                                                <Badge key={i} variant="outline">
                                                    {lang}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full opacity-80 hover:opacity-90"
                                        size="sm"
                                    >
                                        <MessageCircle className="h-4 w-4 mr-2" />
                                        Contact {staff.name.split(' ')[0]}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div> : ""
                    }
                </div>
            </section>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-md bg-gradient-card border-primary/20 bg-white">
                    {selectedStaff && (
                        <>
                            <DialogHeader>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={selectedStaff.image}
                                        alt={selectedStaff.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                                    />
                                    <div>
                                        <DialogTitle className="text-xl font-bold">{selectedStaff.name}</DialogTitle>
                                        <p className="text-primary font-medium">{selectedStaff.position}</p>
                                        <div className="flex items-center gap-1 mt-1">
                                            <Star className="h-4 w-4 fill-accent text-accent" />
                                        </div>
                                    </div>
                                </div>
                            </DialogHeader>

                            <div className="space-y-4 mt-6">
                                <div>
                                    <h4 className="font-semibold mb-2">Specializations</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedStaff.specialization.map((spec, i) => (
                                            <Badge key={i} variant="secondary">
                                                {spec}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2">Contact Information</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-4 w-4 text-primary" />
                                            <span>{selectedStaff.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-4 w-4 text-primary" />
                                            <span>{selectedStaff.email}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-4 w-4 text-primary" />
                                            <span>{selectedStaff.availability}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2">Languages</h4>
                                    <div className="flex gap-2">
                                        {selectedStaff.languages.map((lang, i) => (
                                            <Badge key={i} variant="outline">
                                                {lang}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <Button
                                        className="flex-1 opacity-80 hover:opacity-95"
                                        onClick={() => window.open(`tel:${selectedStaff.phone}`)}
                                    >
                                        <Phone className="h-4 w-4 mr-2" />
                                        Call Now
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="flex-1"
                                        onClick={() => window.open(`mailto:${selectedStaff.email}`)}
                                    >
                                        <Mail className="h-4 w-4 mr-2" />
                                        Email
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};