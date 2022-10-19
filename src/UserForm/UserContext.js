import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState()
    const [lodding, setLodding] = useState(true)


    const registerEmailPassword = (email, password) => {
        setLodding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateInfo = (name) => {
        setLodding(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const logInEmailPassword = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser)
            setLodding(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const userInfo = {
        user,
        lodding,
        registerEmailPassword,
        logInEmailPassword,
        updateInfo,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;