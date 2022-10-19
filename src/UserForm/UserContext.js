import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState()

    const registerEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const userInfo = { user, registerEmailPassword, logInEmailPassword }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;