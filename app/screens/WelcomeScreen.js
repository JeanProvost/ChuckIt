import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
import AppText from "../components/AppText";
import colors from '../config/colors';
import AppButton from '../components/AppButton/AppButton';

function WelcomeScreen({ navigation }) {
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
                <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")} />
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