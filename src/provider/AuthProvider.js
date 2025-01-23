'use client'

import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import { auth } from "@/firebase/firebase.config";

//   import axios from "axios";
//   import { toast } from "react-toastify";
  
  export const AuthContext = createContext();
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Fixed "nell" to "null"
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
  
    // Google Sign-in
    const registerWithGoogle = async () => {
      try {
        return await signInWithPopup(auth, googleProvider);
      } catch (error) {
        handleError(error);
      }
    };
  
    // Email Registration
    const registerWithEmail = async (email, password) => {
      try {
        return await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        handleError(error);
      }
    };
  
    // Email Sign-in
    const signInUser = async (email, password) => {
      try {
        return await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        handleError(error);
      }
    };
  
    // Sign out
    const signoutUser = async () => {
      try {
        return await signOut(auth);
      } catch (error) {
        handleError(error);
      }
    };
  
    // Update Profile
    const updateUserProfile = async (updatedData) => {
      try {
        return await updateProfile(auth.currentUser, updatedData);
      } catch (error) {
        handleError(error);
      }
    };
  
    // Error Handler
    const handleError = (error) => {
      alert(error.message);
    };
  
    // Backend URL
    const backend_url = `https://assignment-11-ph-b10-backend.vercel.app`;
  
    // Context Value
    const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      backend_url,
      registerWithGoogle,
      registerWithEmail,
      signInUser,
      signoutUser,
      updateUserProfile,
      handleError,
    };
  
    // Manage authentication state
    useEffect(()=>{
      let unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
      })
      return ()=> {unsubscribe()}
    },[]);
  
  
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  