import React from 'react';
import { View, Button } from 'react-native';
import { commonStyles } from '../../constants/styles';
import StyledText from '../features/StyledText';

const HomePage = ({ navigation }) => {

    return (
        <View style={{...commonStyles.container, ...commonStyles.flexCenter}}>

            <StyledText header center mb={80}>Medicação e Acompanhamento da Saúde</StyledText>

            <Button title='Começar' onPress={() => navigation.navigate('ProfileEdit')} />

        </View>
    );
};

export default HomePage;
