import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [textUppercase, setTextUppercase] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                textUppercase,
                setTextUppercase,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
