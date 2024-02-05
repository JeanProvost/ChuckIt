import React from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import * as Yup from 'yup';
import { AppForm, SubmitButton, AppFormField } from '../components/Forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <ImageBackground style={styles.backgroundImage} source={require("../assets/images/background.jpg")}>
        <Screen style={styles.container}>
        
        <Image style={styles.logo} source={require("../assets/images/logo.png")} />
            <AppForm
                initialValues={{email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
            <AppFormField
                icon="email"
                autoCapitalize="none"
                placeholder="Email"
                keyBoardType="email-address"
                autoCorrect={false}
                name="email"
                textContentType="emailAddress"
                    />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                name="password"
            />
                    <SubmitButton title="Login" />
            </AppForm> 
        </Screen>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    logo: {
        width: '30%',
        height: '30%',
        alignSelf: 'center',
        marginBottom: '15%',
        marginTop: 30,
        resizeMode: 'contain',
    },
})

export default LoginScreen;