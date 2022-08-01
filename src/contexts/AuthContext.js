import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { boolToString, stringToBool } from '../utils';
import Loader from '../components/features/Loader';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [textUppercase, setTextUppercase] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => { 
        init(); 
    }, []);

    const init = async () => {
        setLoading(true);
        console.log("AuthProvider init");
        try {
            const userStorage = await AsyncStorage.getItem("user");
            setUser(JSON.parse(userStorage));
            console.log(userStorage);

            const upperStorage = await AsyncStorage.getItem("textUppercase");
            setTextUppercase(stringToBool(upperStorage));
            console.log("upper = " + upperStorage);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }

    const handleSetTextUppercase = (value) => {
        setTextUppercase(!!value);
        AsyncStorage.setItem("textUppercase", boolToString(value));
    }

    return (
        <AuthContext.Provider
            value={{
                textUppercase,
                setTextUppercase: handleSetTextUppercase,
            }}
        >
            { loading ? <Loader/> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
