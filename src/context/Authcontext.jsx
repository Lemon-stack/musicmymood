/* eslint-disable react/prop-types */
import React, { useState, useEffect, Suspense, lazy } from "react";
const Spinner = lazy(() => import("../Layout/sub-components/Spinner"));
import { auth } from "../client/client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  const [loading, setLoading] = useState(true);
  const [Spotifyprofile, setSpotifyProfile] = useState(null);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }
  function googleSignin() {
    // return signInWithRedirect(auth, provider)
    return signInWithPopup(auth, new GoogleAuthProvider());
  }
  const sendPasswordReset = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };


  useEffect(() => {
//     const token = localStorage.getItem('spotifyToken');

//     if (token) {
//       fetch('https://api.spotify.com/v1/me', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//         .then(response => response.json())
//         .then(data => setSpotifyProfile(data))
//         .catch(err => console.error(err));
//     }
// console.log(Spotifyprofile.display_name)


  let accessToken = localStorage.getItem('spotifyToken');
 console.log(accessToken)
  // const response = await fetch('https://api.spotify.com/v1/me', {
  //   headers: {
  //     Authorization: 'Bearer ' + accessToken
  //   }
  // });

  // const data = await response.json();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setCurrentUser(null);
        setLoading(false);
      }
      setCurrentUser(user);
      setLoading(false);
    });

    // console.log(currentUser, "current user ")
    return () => unsubscribe();
  }, [currentUser]);



  const value = {
    currentUser,
    signup,
    login,
    logout,
    googleSignin,
    sendPasswordReset,
  };

  if (loading) {
    return <Suspense fallback={<Spinner />} />;
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
