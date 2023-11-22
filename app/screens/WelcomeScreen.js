import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/images/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/images/logo.png")}></Image>
                <Text>User Marketplace</Text>
            </View>

            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#ECBE4F"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#272D38"
    },
    logo: {
        width: 170,
        flex: 1,
        height: 170,
        resizeMode: 'contain',

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
})

export default WelcomeScreen;