import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} >
                <MaterialCommunityIcons name="close"
                    color="white" 
                    size={30} />
            </View>
            <View style={styles.deleteIcon} >
            <MaterialCommunityIcons name="trash-can-outline" 
                color="white" 
                size={30} />
            </View>
            <Image 
                style={styles.image} 
                source={require("../assets/images/chair.jpg")}
            />
        </View>


        );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 50,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        position: "absolute",
        top: 50,
        right: 30,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});

export default ViewImageScreen;