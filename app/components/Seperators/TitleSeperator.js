import React from 'react';
import colors from '../../config/colors';
import { StyleSheet } from 'react-native';

function TitleSeperator(props) {
    return (
        <View style={styles.titleSeperator}></View>
    );
}

const styles = StyleSheet.create({
    titleSeperator: {
        width: "100%",
        height: 2,
        backgroundColor: colors.mediumGray,
    },
})

export default TitleSeperator;