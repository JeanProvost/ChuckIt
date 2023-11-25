import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppText from "../components/AppText";
import colors from '../config/colors';
import WelcomeButton from '../components/WelcomeButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/images/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/images/logo.png")}></Image>
                <AppText>User Marketplace</AppText>
            </View>
            <View style={styles.buttonContainer}>
                <WelcomeButton title="Login" />
                <WelcomeButton title="Register" color="secondary" />
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
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
    buttonContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20,
        
    },
})

export default WelcomeScreen;