// import React from 'react'
// import { useAuth } from '../../context/AuthContext'
// import { useNavigate } from 'react-router'

// export default function ProfileProtector({children}) {
//     const navigate=useNavigate()
//     const {isLogin,user}=useAuth()
//    {
//      user?.uid ? {children}:navigate("/login")
//    }
// }
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