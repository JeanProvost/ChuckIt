import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import App from '../../App';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/images/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket</AppText>
                <AppText style={styles.price}>$100</AppText>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,

    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.tertiary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
})

export default ListingDetailsScreen;