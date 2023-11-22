import React from 'react';
import { Text } from 'react-native';
import colors from '../../config/colors';
import styles from './styles';

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

export default AppText;