import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allAuth = useFirebase()
    return (
        <AuthContext.Provider value={allAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;