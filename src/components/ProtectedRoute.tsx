// components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/Context/AuthContext";
import { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
