import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TEXT_BLACK } from '../../constants/styles';
import { AuthContext } from '../../contexts/AuthContext';

const StyledText = ({ children, header=false, center=false, mb=0 }) => {

    const { textUppercase } = useContext(AuthContext);

    return (
        <Text
            style={{
                ...styles.text,
                textTransform: textUppercase ? 'uppercase' : 'none',
                fontSize: header ? 24 : 18,
                textAlign: center ? "center" : "left",
                marginBottom: mb
            }}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: TEXT_BLACK,
    },
});

export default StyledText;
