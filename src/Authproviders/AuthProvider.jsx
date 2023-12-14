import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config.js'
import { useEffect } from 'react';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null) 
    const [loading, setLading] = useState(true)

    const createUser = (email, password) => {
        setLading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLading(false)
        return signOut(auth)
    }

    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
                setUser(loggedUser) 
                setLading(false)
        })
           return () => {
            unSubscribe
           }
    },[])
    
    const authInfo ={
        user,
        loading,
        createUser,
        signIn, 
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;