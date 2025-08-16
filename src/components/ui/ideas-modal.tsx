import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Star, TrendingUp, Target, Coffee, ShoppingBag, Utensils, Palette, Dumbbell, Globe, Users, Laptop } from 'lucide-react';
import { toast } from './use-toast';
import { Button } from './button';

interface BusinessIdea {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    score: any;
    icon: React.ReactNode;
}

interface Metric {
    feasibility: string;
    profitability: string;
    compatibility: string;
    reason: string;
}

interface RecommendedIdeas {
    idea_id: string;
    metrics: Metric;
}

interface IdeasModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    activityData: {
        pastActivity: string;
        presentActivity: string;
        futureAmbition: string;
    };
    recommendedProducts: any;
}

interface BusinessProduct {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
}

const businessProducts: BusinessProduct[] = [
    { "id": "idea1", "title": "Open a Restaurant", "description": "Food service business with diverse culinary offerings", "category": "Hospitality", "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/8c/d2/32/shri-thal-village-courtyard.jpg?w=800&h=400&s=1" },
    { "id": "idea2", "title": "Start a Bakery", "description": "Fresh baked goods and artisanal pastries", "category": "Food & Beverage", "image": "https://assets.architecturaldigest.in/photos/60084fd2a8f8397741704d58/master/w_1600%2Cc_limit/Mumbai-bakery-breads-Suzette-Bakery-breads.jpg" },
    { "id": "idea3", "title": "Coffee Shop", "description": "Specialty coffee and community gathering space", "category": "Food & Beverage", "image": "https://www.health.com/thmb/s09CPuxrhEqTPRCVzVN1AHuyyXo=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-HowToMakeYourCoffeeHealthier-b36136baabd447c3bd91b5aa9c3ea5ad.jpg" },
    { "id": "idea4", "title": "Photography Studio", "description": "Portraits, event photography, and photo editing", "category": "Creative Services", "image": "https://img.freepik.com/premium-photo/modern-photo-studio-with-professional-equipment_392895-543665.jpg?semt=ais_hybrid&w=740" },
    { "id": "idea5", "title": "Tailoring and Alterations", "description": "Custom tailoring, repairs, and clothing design", "category": "Retail", "image": "https://content.jdmagicbox.com/comp/def_content/tailors/shutterstock-355231778-tailors-4-pb8f1.jpg" },
    { "id": "idea6", "title": "Kids Activity Center", "description": "Creative and physical activities for children", "category": "Education", "image": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_487/stock%2FGettyImages-473032112" },
    { "id": "idea7", "title": "Tech Repair Shop", "description": "Repairs for phones, tablets, and electronics", "category": "Technology", "image": "https://hannercomputer.com/wp-content/uploads/tech-background-misc-items-e1645034639571.jpg" },
    { "id": "idea8", "title": "Ice Cream Parlor", "description": "Handcrafted ice creams and frozen treats", "category": "Food & Beverage", "image": "https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg" },
    { "id": "idea9", "title": "Cooking Classes", "description": "In-person or virtual culinary instruction", "category": "Education", "image": "https://www.healthyfood.com/wp-content/uploads/2021/01/The-best-cooking-methods-to-unlock-vegetables-goodness-iStock-640107874.jpg" },
    { "id": "idea10", "title": "Toy Store", "description": "Educational and fun toys for all ages", "category": "Retail", "image": "https://images.squarespace-cdn.com/content/v1/5f869a1e9bd3a54c9d6b462d/1639546454087-1WY8EEWT96AGWVQYTPNA/unsplash-image-gDiRwIYAMA8.jpg" },
    { "id": "idea11", "title": "Open a Bar", "description": "Lively nightlife venue offering drinks and entertainment", "category": "Hospitality", "image": "https://images.squarespace-cdn.com/content/v1/66e9d7dd116b1a1677dd8758/17c60a9d-89eb-44f9-9484-8989deefa578/PNG+image.jpeg" },
    { "id": "idea12", "title": "Start a Pickling Business", "description": "Produce and sell pickled vegetables and condiments", "category": "Food & Beverage", "image": "https://akm-img-a-in.tosshub.com/aajtak/images/story/202206/mango_pickle-sixteen_nine.jpg?size=948:533" },
    { "id": "idea13", "title": "Sell Sports Equipment", "description": "Retail outlet for fitness gear and sports accessories", "category": "Retail", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkV7YRzqbOnua_wEISvTJHMEkRQhWayrxjAQ&s" },
    { "id": "idea14", "title": "Bookstore and Stationery Shop", "description": "Sell books, journals, and office/school supplies", "category": "Retail", "image": "https://www.rankme1.com/wp-content/uploads/2019/12/stationery-books.jpeg" },
    { "id": "idea15", "title": "Language School", "description": "Teach foreign languages through immersive methods", "category": "Education", "image": "https://images.shiksha.com/mediadata/images/articles/1593692498phpqoP7Fd.jpeg" }
]

export const IdeasModal = ({ isOpen, onOpenChange, activityData, recommendedProducts }: IdeasModalProps) => {
    console.log(recommendedProducts);
    const [isGenerating, setIsGenerating] = useState(false);
    const [ideas, setIdeas] = useState<BusinessIdea[]>([]);
    const [showResults, setShowResults] = useState(false);

    // const calculateScore = () => {
    //     const pastScore = activityData.pastActivity.length > 50 ? Math.floor(Math.random() * 3) + 6 : Math.floor(Math.random() * 5) + 3;
    //     const presentScore = activityData.presentActivity.length > 50 ? Math.floor(Math.random() * 3) + 7 : Math.floor(Math.random() * 5) + 4;
    //     const futureScore = activityData.futureAmbition.length > 50 ? Math.floor(Math.random() * 2) + 8 : Math.floor(Math.random() * 4) + 5;
    //     return Math.min(10, Math.round((pastScore + presentScore + futureScore) / 3));
    // };

    const generateIdeas = async () => {
        setIsGenerating(true);
        setShowResults(false);

        // Show loader for 3 seconds
        // await new Promise(resolve => setTimeout(resolve, 3000));

        // Select 3 random products from the array
        // const shuffledProducts = [...businessProducts].sort(() => 0.5 - Math.random());
        // const selectedProducts = shuffledProducts.slice(0, 3);.
        const recommendedIds = recommendedProducts.map(item => item.idea_id);
        const selectedProducts = businessProducts.filter(product => recommendedIds.includes(product.id));
        console.log("recom: ", recommendedProducts);
        console.log("businessProducts: ", businessProducts);
        console.log("selected: ", selectedProducts);
        // console.log(selectedProducts);

        const generatedIdeas: BusinessIdea[] = selectedProducts.map((product, index) => {
            const strategies = ['Premium Strategy', 'Digital Strategy', 'Community Strategy'];

            const icons = [<Star className="h-5 w-5" />, <Globe className="h-5 w-5" />, <Users className="h-5 w-5" />];
            const metrics = recommendedProducts[index].metrics;
            return {
                id: product.id,
                title: product.title,
                description: product.description,
                image: product.image,
                category: strategies[index],
                score: metrics,
                icon: icons[index]
            };
        });

        setIdeas(generatedIdeas);
        setIsGenerating(false);
        setShowResults(true);
    };

    useEffect(() => {
        if (isOpen) {
            generateIdeas();
        }
    }, [isOpen]);

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-emerald-600';
        if (score >= 50) return 'text-amber-600';
        return 'text-red-500';
    };

    const getScoreBadgeColor = (score: number) => {
        if (score >= 8) return 'bg-emerald-100 text-emerald-800 border-emerald-300';
        if (score >= 6) return 'bg-amber-100 text-amber-800 border-amber-300';
        return 'bg-red-100 text-red-800 border-red-300';
    };

    const selectIdea = () => {
        toast({
            title: "Idea selected successfully",
            description: "This idea has been added to your profile",
        });
        onOpenChange(false);
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card border-primary/20 bg-white">
                {isGenerating ? (
                    <div className="flex flex-col items-center justify-center py-16 space-y-6">
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text">
                                Generating Your Ideas
                            </h3>
                            <p className="animate-pulse text-lg">
                                Our AI wizard is crafting personalized business strategies just for you...
                            </p>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="w-64 h-2 bg-border rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-primary animate-pulse" style={{
                                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, width-expand 3s ease-out forwards'
                            }}></div>
                        </div>
                    </div>
                ) : showResults ? (
                    <>
                        <DialogHeader className="text-center">
                            <DialogTitle className="flex items-center justify-center gap-3 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-700">
                                <div className="h-8 w-8 rounded-full bg-gradient-secondary flex items-center justify-center">
                                    <Sparkles className="h-4 w-4 text-accent-foreground" />
                                </div>
                                Your Personalized Business Ideas
                            </DialogTitle>
                            <p className="text-muted-foreground text-center">
                                Based on your activities and ambitions, here are your top-rated business strategies:
                            </p>
                        </DialogHeader>

                        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 mt-6">
                            {ideas.map((idea, index) => (
                                <Card
                                    key={idea.id}
                                    className="bg-gradient-card border-primary/10 shadow-card hover:shadow-elegant transition-all duration-500 animate-scale-in overflow-hidden"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    {/* Idea Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={idea.image}
                                            alt={idea.title}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                        {/* Category Badge */}
                                        {/* <div className="absolute bottom-3 left-3">
                                            <Badge variant="outline" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                                                {idea.category}
                                            </Badge>
                                        </div> */}
                                    </div>

                                    <CardHeader className="pb-3 items-start text-left">
                                        <div className="flex items-start gap-3 w-full">
                                            <div className="h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
                                                {idea.icon}
                                            </div>
                                            <div className="flex-1">
                                                <CardTitle className="text-base font-semibold leading-tight">{idea.title}</CardTitle>
                                                <div className="flex flex-col items-start gap-2 mt-1">
                                                    <div>
                                                        <span className="text-xs text-muted-foreground">Feasibility: </span>
                                                        <span className={`text-lg font-bold ${getScoreColor(idea.score.feasibility)}`}>
                                                            {idea.score.feasibility}%
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-xs text-muted-foreground">Profitability: </span>
                                                        <span className={`text-lg font-bold ${getScoreColor(idea.score.profitability)}`}>
                                                            {idea.score.profitability}%
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-xs text-muted-foreground">Compatibility: </span>
                                                        <span className={`text-lg font-bold ${getScoreColor(idea.score.compatibility)}`}>
                                                            {idea.score.compatibility}%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                                            {idea.description}
                                        </p>
                                        <p className="text-xs text-muted-foreground leading-relaxed text-center">
                                            (<b>Reason:</b> {idea.score.reason})
                                        </p>
                                        <div className='flex justify-center mt-5'>
                                            <Button
                                                variant="outline"
                                                className="bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center shadow-sm hover:opacity-90 text-accent-foreground border-accent/30 text-white hover:from-green-600 hover:to-blue-600 hover:text-white"
                                                onClick={selectIdea}
                                            >
                                                Select Idea
                                            </Button>
                                        </div>

                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </>
                ) : null}
            </DialogContent>
        </Dialog>
    );
};