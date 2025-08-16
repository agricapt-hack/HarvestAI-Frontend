import { useApp } from "@/store/AppContext";
import ProductActionModal from "./ProductActionModal";
import LoadingModal from "./LoadingModal";
import ConversationModal from "./ConversationModal";
import FlowchartModal from "./FlowchartModal";
import AnalysisModal from "./AnalysisModal";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import ModulesModal from "./ModulesModal";
import FieldDetailsModal from "./FieldDetailsModal";


const GlobalModals = () => {
  const appContext = useApp();

  return (
    <>
      <ProductActionModal
        product={appContext.selectedProduct}
        isOpen={appContext.showProductAction}
        onClose={appContext.handleCloseProductAction}
        onGamify={appContext.handleGamify}
        onAnalysis={appContext.handleAnalysis}
        onModules={appContext.handleModules}
      />

      <LoadingModal
        isOpen={appContext.showLoading}
        onComplete={appContext.handleLoadingComplete}
      />

      {appContext.showConversation && appContext.selectedProduct && (
        <ConversationModal
          isOpen={appContext.showConversation}
          onClose={() => appContext.handleCloseConversation()}
          onShowFlowchart={appContext.handleShowFlowchart}
        />
      )}

      {appContext.showFlowchart && appContext.selectedProduct && (
        <FlowchartModal
          product={appContext.selectedProduct}
          isOpen={appContext.showFlowchart}
          onClose={() => appContext.handleCloseFlowchart()}
        />
      )}

      <AnalysisModal
        product={appContext.selectedProduct}
        isOpen={appContext.showAnalysis}
        onClose={() => appContext.handleCloseAnalysis()}
      />
      
      <ModulesModal
        product={appContext.selectedProduct}
        modules={appContext.moduleData}
        isOpen={appContext.showModules}
        onClose={() => appContext.handleCloseModule()}
      />

      <SignupModal
        isOpen={appContext.showSignup}
        onClose={() => appContext.handleCloseSignup()}
        onSwitchToLogin={appContext.handleSwitchToLogin}
      />

      <LoginModal
        isOpen={appContext.showLogin}
        onClose={() => appContext.handleCloseLogin()}
        onSwitchToSignup={appContext.handleSwitchToSignup}
      />

      <FieldDetailsModal
        field={appContext.selectedField}
        isOpen={appContext.showFieldDetails}
        onClose={appContext.handleToggleFieldDetails}
      />
    </>
  );
};

export default GlobalModals;