
import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function ProfileProtector({ children }) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <h1>Loading...</h1>;

  if (!user?.uid) {
    return <Navigate to="/" />;
  }

  return children;
}