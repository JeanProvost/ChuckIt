import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from '../../config/colors';

function AppText({ children, style, ...otherProps }) {
    return <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: colors.secondary,
        fontSize: 18,
        fontFamily: "Avenir",
    },
})

export default AppText;