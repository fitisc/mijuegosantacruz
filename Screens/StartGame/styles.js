import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d8a4a4",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
    },
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        maxWidth: "80%",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 20,
        marginTop: 20,

       
    },
    input: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 20,
        color: "#000",
        marginBottom: 10,
    },
}
);
