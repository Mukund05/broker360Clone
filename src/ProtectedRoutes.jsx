import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Auth/AuthProvider";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  console.log("am I authenticated", isAuthenticated);

  if (!isAuthenticated) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoute;
