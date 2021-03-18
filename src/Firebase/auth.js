import { useState, useEffect, createContext } from "react";
import firebase from "./index";

export const contextAuth = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
        console.log('onAuthStateChanged', currentUser);
      if (currentUser) {
        const email = currentUser.email;
        const userId = currentUser.uid;

        setUser({
          isNewUser: false,
          email,
          id: userId,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  function handleRegister(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log("el error");
        console.log(error);
        if (error.code === 'auth/weak-password') {
            alert('weak password, min 6 characters');
          }
  
          if (error.code === 'auth/email-already-in-use') {
            alert('user already registered');
          }
      });
  }
  function handleLogin(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log("el error", error);
        
        
        if (error.code === 'auth/user-not-found') {
            alert('user does not exist');
          }
      });
  }
  function handleLogout() {
    firebase.auth().signOut();
  }

  return (
    <contextAuth.Provider
      value={{ user, handleLogout, handleRegister, handleLogin }}
    >
      {children}
    </contextAuth.Provider>
  );
}
