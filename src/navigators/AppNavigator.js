import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { AuthContext } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    const { user } = useContext(AuthContext);

    return (
        <Stack.Navigator 
            screenOptions={{ headerShown: false }} 
        >
            { !user && <Stack.Screen name="Auth" component={AuthNavigator} /> }
            <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
