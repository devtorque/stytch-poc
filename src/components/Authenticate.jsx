import { useStytchMemberSession } from "@stytch/react/b2b";
import { Navigate } from "react-router-dom";
import LoginOrSignup from "./StytchB2B";

export const Authenticate = () => {
  const { session } = useStytchMemberSession();

  if (session) {
    return <Navigate to="/dashboard" />;
  }

  return <LoginOrSignup />;
};