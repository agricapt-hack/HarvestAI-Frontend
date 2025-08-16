import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { useApp } from "@/store/AppContext";

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
];

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const appContext = useApp();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('nari-shakti-language', languageCode);
    appContext.changeLanguage(languageCode);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="bg-white/80 hover:bg-white/90 border-green-200">
          <Languages className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">{getCurrentLanguage().nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border-green-200">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer hover:bg-green-50 ${
              i18n.language === language.code ? 'bg-green-100 text-green-700 font-medium' : ''
            }`}
          >
            <span className="mr-2">{language.nativeName}</span>
            <span className="text-sm text-gray-500">({language.name})</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;