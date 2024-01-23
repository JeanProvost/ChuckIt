import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import WelcomeButton from '../components/WelcomeButton/WelcomeButton';
import defaultStyles from '../config/styles';
import ErrorMessage from '../components/ErrorMessage';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/images/logo.png")} />

            <Formik
                initialValues={{email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppTextInput
                            icon="email"
                            autoCapitalize="none"
                            placeholder="Email"
                            keyBoardType="email-address"
                            onChangeText={handleChange("email")}
                            autoCorrect={false}
                            textContentType="emailAddress"
                            onBlur={() => setFieldTouched("email")}
                        />
                        {<ErrorMessage error={errors.email} visible={touched.email} />}
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            onBlur={() => setFieldTouched("password")}
                        />
                        <ErrorMessage error={errors.password} visible={touched.password} />
                        <WelcomeButton title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik> 
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
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