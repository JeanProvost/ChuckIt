import React from 'react';
import AppText from '../AppText/AppText';
import { StyleSheet } from 'react-native';
import defaultStyles from '../../config/styles';

function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;

    return (
        <AppText style={styles.error} >{error}</AppText>
    );
}
const styles = StyleSheet.create({
    error: {
        color: defaultStyles.colors.danger,
    },
})

export default ErrorMessage;