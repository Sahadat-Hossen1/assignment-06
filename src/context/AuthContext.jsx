import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import { log } from "firebase/firestore/pipelines";
import { Navigate } from "react-router";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  //all state
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});

  //authstate change
  useEffect(() => {
   const unsubcribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLogin(true)
      } else {
        console.log("no user found");
      }
    });
    return ()=> unsubcribe()
  }, []);
  const LogOut = () => {
    signOut(auth)
      .then(()=>{
        setUser(null)
        return <Navigate to="/"/>
      })
      .catch((error) => console.log(error));
  };
  const damyUser = {
    name: "sahadat",
    email: "sahadat@gmail.com",
    roll: "admin",
    photo: "www.google.photo.com",
  };
  const authInfo = {
    isLogin,
    setIsLogin,
    isLoading,
    setIsLoading,
    damyUser,
    
    user,
    LogOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
