import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

function AppButton({title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress}
            activeOpacity={.8}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        marginBottom: 25,
        marginTop: 50,
        borderRadius: 40,
        alignSelf: 'center',
    },
    text: {
        color: colors.white,
        justifyContent: "center",
        fontSize: 26,
    },
});

export default AppButton;