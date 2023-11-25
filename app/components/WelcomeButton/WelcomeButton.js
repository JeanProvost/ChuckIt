import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

function WelcomeButton({title, onPress, color = "primary" }) {
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
        width: "95%",
        height: "9%",
        marginBottom: 10,
        borderRadius: 40,
    },
    text: {
        color: colors.white,
        justifyContent: "center",
        fontSize: 26,
    },
});

export default WelcomeButton;