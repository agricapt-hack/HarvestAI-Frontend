import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface AppContextType {
  language: string;
  selectedProduct: any | null;
  selectedField: any | null;
  showProductAction: boolean;
  showFieldDetails: boolean;
  showConversation: boolean;
  showFlowchart: boolean;
  showAnalysis: boolean;
  showModules: boolean;
  showSignup: boolean;
  showLogin: boolean;
  showLoading: boolean;
  conversationData: any | null;
  moduleData: any | null;

  changeLanguage: (language) => void;
  handleCardClick: (product: any) => void;
  handleGamify: () => void;
  handleAnalysis: () => void;
  handleModules: () => void;
  handleLoadingComplete: () => void;
  handleShowFlowchart: () => void;
  handleLoginClick: () => void;
  handleSwitchToLogin: () => void;
  handleSwitchToSignup: () => void;
  handleCloseProductAction: () => void;
  handleCloseConversation: () => void;
  handleCloseFlowchart: () => void;
  handleCloseAnalysis: () => void;
  handleCloseModule: () => void;
  handleCloseSignup: () => void;
  handleCloseLogin: () => void;
  handleToggleFieldDetails: () => void;
  updateConversationData: (data: any) => void;
  updateModuleData: (data: any) => void;
  updateFieldData: (data: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const [showProductAction, setShowProductAction] = useState(false);
  const [showConversation, setShowConversation] = useState(false);
  const [showFlowchart, setShowFlowchart] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showModules, setShowModules] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showFieldDetails, setShowFieldDetails] = useState(false);
  const [conversationData, setConversationData] = useState(null);
  const [moduleData, setModuleData] = useState(null);


  useEffect(() => {
    const language = localStorage.getItem("nari-shakti-language");

    if (!language) {
      localStorage.setItem("nari-shakti-language", "en");
      setLanguage("en");
    } else {
      setLanguage(language);
    }
  }, [])

  const changeLanguage = (language) => {
    setLanguage(language);
  }

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowProductAction(true);
  };
  const handleGamify = () => {
    setShowProductAction(false);
    setShowLoading(true);
  };
  const handleAnalysis = () => {
    setShowProductAction(false);
    setShowAnalysis(true);
  };
  const handleModules = () => {
    setShowProductAction(false);
    setShowModules(true);
  };
  const handleLoadingComplete = () => {
    setShowLoading(false);
    setShowConversation(true);
  };
  const handleShowFlowchart = () => {
    setShowConversation(false);
    setShowFlowchart(true);
  };
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };
  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleCloseProductAction = () => {
    setShowProductAction(false);
  }
  const handleCloseConversation = () => {
    setShowConversation(false);
  }
  const handleCloseFlowchart = () => {
    setShowFlowchart(false);
  }
  const handleCloseAnalysis = () => {
    setShowAnalysis(false);
  }
  const handleCloseModule = () => {
    setShowModules(false);
  }
  const handleCloseSignup = () => {
    setShowSignup(false);
  }
  const handleCloseLogin = () => {
    setShowLogin(false);
  }

  const updateConversationData = (data: any) => {
    setConversationData(data);
  }
  const updateModuleData = (data: any) => {
    setModuleData(data);
  }
  const updateFieldData = (data: any) => {
    setSelectedField(data);
  }

  const handleToggleFieldDetails = () => {
    setShowFieldDetails(!showFieldDetails);
  }

  const contextValues = {
    language,
    selectedProduct,
    selectedField,
    showProductAction,
    showConversation,
    showFlowchart,
    showAnalysis,
    showModules,
    showSignup,
    showLogin,
    showLoading,
    showFieldDetails,
    conversationData,
    moduleData,

    changeLanguage,
    handleCardClick,
    handleGamify,
    handleAnalysis,
    handleModules,
    handleLoadingComplete,
    handleShowFlowchart,
    handleLoginClick,
    handleSwitchToLogin,
    handleSwitchToSignup,
    handleCloseProductAction,
    handleCloseConversation,
    handleCloseFlowchart,
    handleCloseAnalysis,
    handleCloseModule,
    handleCloseSignup,
    handleCloseLogin,
    handleToggleFieldDetails,
    updateConversationData,
    updateModuleData,
    updateFieldData
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};
