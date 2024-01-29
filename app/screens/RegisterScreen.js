import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import * as Yup from 'yup';
import { AppForm, SubmitButton, AppFormField } from '../components/Forms';

const validationSchema = Yup.object().shape({
    firstname: Yup.string().required().label("First Name"),
    lastname: Yup.string().required().label("Last Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{firstname: '', lastname: '', email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                
                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        placeholder="First Name"
                        name="firstname"
                    />
                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        placeholder="Last Name"
                        name="lastame"
                    />

                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Email"
                    name="email"
                    keyBoardType="email-address"
                    textContentType="emailAddress"
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                    name="password"
                />
                <SubmitButton title="Register"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 10,
    },
    fullname: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    }
})

export default RegisterScreen;