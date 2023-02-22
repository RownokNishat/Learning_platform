import React, { createContext, useEffect, useState } from "react";
import app from "../Firebse/Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";

export const Authcontext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  ///////////////login and signup with email and password/////////////////

  const createUser = (email, password, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password, photoURL);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  ///////////////Google Login///////////////

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGit);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user inside state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [loading, user]);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    verifyEmail,
    googleLogin,
    githubLogin,
    updateUserProfile,
    loading,
  };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default UserContext;
