"use client";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, use, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../lib/firebase";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsub();
  }, []);

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      toast.success("User Log-In successfully ");
    } catch (error) {
      toast.error("Invalid credentials please check");
    }
    setIsLoading(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.error("User Log-Out successfully ");
    } catch (error) {
      toast.error("Invalid credentials please check");
    }
  };

  const logIn = async (email, password) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User Log-In successfully ");
    } catch (error) {
      toast.error("Invalid credentials please check");
    }
    setIsLoading(false);
  };

  const signUp = async (email, password) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User Create successfully ");
    } catch (error) {
      toast.error("Invalid credentials please check");
    }
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignInWithGoogle,
        handleLogout,
        logIn,
        signUp,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
