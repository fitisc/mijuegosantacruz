import { StyleSheet } from "react-native";
import { themes } from "../../Constantes/themes";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 95,
        padding: 10,
        marginVertical: 10,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    number: {
        fontSize: 30,
        color: themes.colors.textSecondaryColor,
        fontWeight: themes.fonts.fontsWeight.bold,
        fontFamily: themes.fonts.primary,
    },
    
});