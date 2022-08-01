import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { BACKGROUND_COLOR } from "../../constants/styles";

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Loader;