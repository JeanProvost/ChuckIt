import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import App from '../../App';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen({ route }) {
    const Listing = route.params;
    return (
        <View>
            <Image style={styles.image} source={Listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{Listing.title}</AppText>
                <AppText style={styles.price}>{Listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require("../assets/images/defaultIcon.jpg")}
                        title="User"
                        subTitle="5 Listings"
                    />
                </View>
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
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen;