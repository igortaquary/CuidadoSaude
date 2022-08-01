import React, { useContext } from "react";
import { Switch, View } from "react-native";
import { commonStyles } from "../../constants/styles";
import { AuthContext } from "../../contexts/AuthContext";
import StyledText from "../features/StyledText";

const ConfigPage = () => {

    const { textUppercase, setTextUppercase } = useContext(AuthContext);

    return (
        <View style={commonStyles.container}>
            <View>
                <Switch value={textUppercase} onValueChange={v => setTextUppercase(v)} /> 
                <StyledText>Texto em caixa alta</StyledText>
            </View>
        </View>
    )
}

export default ConfigPage;