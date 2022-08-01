import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthNavigator} />
            <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
