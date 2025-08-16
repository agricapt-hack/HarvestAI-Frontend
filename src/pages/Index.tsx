import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import { useApp } from "@/store/AppContext";
import { BankContactSection } from "@/components/BankContact";
import { FloatingWizard } from "@/components/FloatingWizard";
import { ActivityPlanner } from "@/components/ActivityPlanner";
import { useUser } from "@clerk/clerk-react";
import FieldManagement from "@/components/FieldManagement";

const Index = () => {
  const { t } = useTranslation();
  const { user } = useUser();

  const appContext = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navbar onLoginClick={appContext.handleLoginClick} />
      {/* <FloatingWizard /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* <div className="text-center mb-16 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-bounce delay-1000"></div>
            <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-30 animate-pulse delay-2000"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('heroTag1')}
              <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent pb-3">
                {t('heroTag2')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              {t('heroDescription')}
            </p>
          </div>
        </div> */}

        {user && <FieldManagement />}

        <div className="fixed bottom-10 right-20">
          <FloatingWizard />
        </div>

        {/* <FileUploadSection /> */}

        {/* <div className="flex justify-center items-center">
          <ActivityPlanner /> &nbsp;&nbsp;
          <FloatingWizard />
        </div> */}

        {/* <BankContactSection /> */}

        {/* {!user && <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">{t('readyToTransform')}</h3>
            <p className="text-xl mb-8 opacity-90">{t('joinThousands')}</p>
            <Button
              onClick={appContext.handleLoginClick}
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold"
            >
              {t('startJourney')}
            </Button>
          </div>
        </div>} */}
      </div>
    </div>
  );
};

export default Index;
