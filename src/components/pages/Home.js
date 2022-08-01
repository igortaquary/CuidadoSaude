import React from 'react';
import { View, Button } from 'react-native';
import StyledText from '../features/StyledText';

const HomePage = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <StyledText>Home Page</StyledText>

            <Button title='Proxima' onPress={() => navigation.navigate('Main')} />
        </View>
    );
};

export default HomePage;
