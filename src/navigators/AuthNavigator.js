import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../components/pages/Home';
import ProfileEditPage from '../components/pages/ProfileEdit';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="ProfileEdit" component={ProfileEditPage} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
