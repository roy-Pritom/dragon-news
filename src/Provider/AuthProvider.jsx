import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { setLogLevel } from 'firebase/app';

const auth = getAuth(app);

export const authContext=createContext(null);

const AuthProvider = ({children}) => {
    const [user,SetUser]=useState(null);
    const [loading,SetLoading]=useState(true);
    // for get user
    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            SetUser(currentUser)
            SetLoading(false)
            console.log(user)
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    // signUp
    const createUser=(email,password)=>{
        SetLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)

    }
    const logIn=(email,password)=>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
// logOut
const logOut=()=>{
    SetLoading(true)

  return signOut(auth)

}

    const authInfo={
          user,
          createUser,
          logIn,
          logOut,
          loading,
          
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;