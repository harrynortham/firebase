import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // Use null state or useState() to stop flicker of UI (issue having more than 2 states)

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  // Add further functions here for ForgotPassword, ChangePassword, UpdateDetails etc

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      //console.log("Auth", currentuser); // Remove this before production
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <authContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
