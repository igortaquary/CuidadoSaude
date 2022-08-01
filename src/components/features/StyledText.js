import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

const StyledText = ({ children }) => {

    const { textUppercase } = useContext(AuthContext);

    return (
        <Text
            style={{
                ...styles,
                textTransform: textUppercase ? 'uppercase' : 'none',
            }}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
    },
});

export default StyledText;
