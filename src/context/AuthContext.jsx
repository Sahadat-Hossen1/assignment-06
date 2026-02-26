import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import auth, { db } from "../firebase/firebase";
import { log } from "firebase/firestore/pipelines";
import { Navigate, useNavigate } from "react-router";
import { doc, getDoc,  } from "firebase/firestore";

//
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  //all state
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
  message: "",
  type: "",
});
  const [user, setUser] = useState({});
  
 //
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
       
        const docRef = doc(db, "users", authUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
         
          setUser({
            uid: authUser.uid,
            email: authUser.email,
            roll: docSnap.data().roll,
            displayName: authUser.displayName,
            photoURL: authUser.photoURL,
            ...docSnap.data(), 
          });
        } else {
         
          setUser(authUser);
        }

      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const LogOut = () => {
    signOut(auth)
      .then(()=>{
        setUser(null)
      })
      .catch((error) => console.log(error));
  };
  
  const authInfo = {
    isLogin,
    setIsLogin,
    isLoading,
    setIsLoading,
     
    
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
