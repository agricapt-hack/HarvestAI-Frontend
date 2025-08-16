import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useUser } from "@clerk/clerk-react";

const Navbar = ({ onLoginClick }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isSignedIn } = useUser();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <img src="/logo2.png" height="80px" width="80px" alt="logo" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {t("nariShakti")}
              </h1>
              <p className="text-sm text-gray-600">{t("financialCompanion")}</p>
            </div>
          </div>

          <div className="flex items-center">
            <p className="text-m text-black-600 mr-5 font-semibold cursor-pointer" onClick={() => navigate("/loans")}>{t("loans")}</p>
            <p className="text-m text-black-600 mr-5 font-semibold cursor-pointer" onClick={() => navigate("/insurance")}>{t("insurance")}</p>
            {/* <p className="text-m text-black-600 mr-5 font-semibold cursor-pointer" onClick={() => navigate("/accounts")}>{t("accounts")}</p> */}
            {/* <p className="text-m text-black-600 mr-5 font-semibold cursor-pointer" onClick={() => navigate("/recordings")}>{t("recordings")}</p> */}
            <LanguageSelector />
            &nbsp; &nbsp; &nbsp;
            {isSignedIn ? (
                <UserMenu />
              ) : (
            <Button
              onClick={onLoginClick}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              {t("getStarted")}
            </Button>)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
