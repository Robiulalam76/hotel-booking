import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = ('')

    const registerEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userInfo = { user, registerEmailPassword }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;