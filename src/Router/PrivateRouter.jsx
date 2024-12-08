import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import { AuthContext } from "../Provider/AuthProvider";
export default function PrivateRouter({ children }) {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
}
