import FinancialCard from "@/components/FinancialCard";
import Navbar from "@/components/Navbar";
import { useApp } from "@/store/AppContext";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { convertGamifyConversations } from "@/lib/convertors";
import { useFinancialProducts } from "@/lib/useFinancialProducts";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined } from "lucide-react";
import FullPageLoader from "@/components/FullPageLoader";

const Loans = () => {
  const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
  const BASE_URL2 = import.meta.env.VITE_BACKEND_BASE_URL2;
  const BASE_URL_AGRI = import.meta.env.VITE_BACKEND_BASE_URL_AGRI;
  const { t } = useTranslation();
  const appContext = useApp();
  const { user } = useUser();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [currentProduct, setCurrentProduct] = useState(null);
  const financialProducts = useFinancialProducts("loan");

  const [analyzedProducts, setAnalyzedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const langMap = {
    en: "English",
    bn: "Bengali",
    hi: "Hindi",
    mr: "Marathi",
    kn: "Kannada",
  }

  useEffect(() => {

    const fetchConversationData = async () => {
      if (currentProduct) {
        const response = await axios.post(`${BASE_URL}/gamify`, {
          customer_id: user?.username,
          product_id: currentProduct.id,
        });

        const convertedData = convertGamifyConversations(response.data);
        const currentProductInfo = financialProducts.find(product => product.id === currentProduct.id);
        appContext.updateConversationData({ ...convertedData, ...currentProductInfo });
      }
    }
    fetchConversationData();

    const fetchLearningModules = async () => {
      if (currentProduct) {
        console.log(currentProduct);
        axios.post(`${BASE_URL_AGRI}/fin/yt-search`, {
          query: `Search top videos in ${langMap[appContext.language]} language on "${currentProduct.title}" for financial awareness and learning.`
        }).then((res) => {
          console.log(res.data);
          const videos = res.data.videos;
          const trimmedVideos = videos.slice(0, 3);
          appContext.updateModuleData(trimmedVideos);
        }).catch((err) => {
          console.log(err);
        });

      }
    }
    fetchLearningModules();

  }, [currentProduct, user])

  const handleProductClick = (product) => {
    if (!user) {
      toast({
        title: "Authentication Failed",
        description: "Login first to create interactive gamified conversations",
        variant: "destructive"
      });
      return;
    }
    setCurrentProduct(product);
    appContext.handleCardClick(product);
  }

  const analyzeProducts = () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      axios.post(`${BASE_URL}/analyze`, {
        customer_id: user?.username,
        product_type: "loans"
      }).then((res) => {
        console.log(res.data);
        const productIds = res.data.products;
        const matchedProducts = financialProducts.filter(p => productIds.includes(p.id));
        console.log(matchedProducts);
        setAnalyzedProducts(matchedProducts);
        setIsModalOpen(true);
      }).catch((err) => {
        console.log(err);
      });
      setIsAnalyzing(false);
    }, 3000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {isAnalyzing && <FullPageLoader />}
      <Navbar onLoginClick={appContext.handleLoginClick} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t('exploreProducts')}
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('productsDescription')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialProducts.map((product) => (
              <FinancialCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>

          {/* {user && <div className="flex justify-center items-center mt-10">
            <Button
              variant="outline"
              className="bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center shadow-sm hover:opacity-90 text-accent-foreground border-accent/30 text-white hover:from-green-600 hover:to-blue-600 hover:text-white"
              onClick={analyzeProducts}
            >
              <ChartNoAxesCombined className="h-4 w-4 mr-2" />
              Analyze
            </Button>
          </div>} */}

          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white max-w-lg w-full p-6 rounded-lg shadow-xl relative">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Recommended Products</h2>
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {analyzedProducts.map((product) => (
                    <div key={product.id} className={`p-4 rounded-lg border cursor-pointer hover:shadow-md`} >
                      <div className="flex items-center space-x-4">
                        <product.icon className="w-6 h-6" />
                        <div>
                          <h4 className="font-semibold">{product.title}</h4>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </Button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Loans;
