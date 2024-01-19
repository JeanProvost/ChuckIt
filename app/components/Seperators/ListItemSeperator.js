import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../config/colors';

function ListItemSeperator() {
    return (
        <View style={styles.seperator} />
    );
}

const styles = StyleSheet.create({
    seperator: {
        width: '100%',
        height: 0.3,
        backgroundColor: colors.lightGray
    },
});

export default ListItemSeperator;