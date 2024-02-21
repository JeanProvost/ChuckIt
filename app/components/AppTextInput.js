import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput, StyleSheet, View, SafeAreaView } from 'react-native';
import defaultStyles from '../config/styles';
import { TouchableOpacity } from 'react-native';

function AppTextInput({ icon, onPress, ...otherProps }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.mediumGray} style={styles.icon} />}
            <TextInput
                placeholderTextColor={defaultStyles.colors.mediumGray}
                style={defaultStyles.text} {...otherProps} />
        </View>
        </ TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
})

export default AppTextInput;