
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

interface FinancialCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    icon: any;
    color: string;
  };
  onClick: () => void;
}

const FinancialCard = ({ product, onClick }: FinancialCardProps) => {
  const Icon = product.icon;

  return (
    <section id={product.id}>
      <Card
        className="cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-2 hover:border-primary/20"
        onClick={onClick}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating sparkle effect */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Sparkles className="h-5 w-5 text-primary animate-pulse" />
        </div>

        <CardHeader className="relative z-10">
          <div className={`w-16 h-16 rounded-2xl ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
            <Icon className="h-8 w-8 group-hover:animate-bounce" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 font-bold">
            {product.title}
          </CardTitle>
          <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span>Start Learning</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:animate-pulse" />
          </div>
        </CardContent>

        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 p-[1px]">
            <div className="h-full w-full rounded-lg bg-white"></div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default FinancialCard;
