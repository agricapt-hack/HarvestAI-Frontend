import { useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const SSOCallback = () => {
  const { handleRedirectCallback } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    handleRedirectCallback({}).then(() => {
      navigate("/dashboard");
    });
  }, []);

  return <div className="text-center mt-10">Signing in with provider...</div>;
};

export default SSOCallback;
