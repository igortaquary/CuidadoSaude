import { StyleSheet } from "react-native";

export const PRIMARY_COLOR = "#3A86FF";
export const SECONDARY_COLOR = "#";
export const BACKGROUND_COLOR = "#EEE";
export const WHITE = "#FFF";
export const TEXT_BLACK = "#222"

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: BACKGROUND_COLOR
    },
    flexCenter: {
        display: "flex",
        justifyContent: "center",
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        tintColor: WHITE,
        height: 20
    },
    textInput: {
        backgroundColor: "#FFF",
        borderColor: "#333",
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        fontSize: 18,
        tintColor: PRIMARY_COLOR
    }
})