import React from 'react';
import Screen from '../components/Screen';
import { FlatList, StyleSheet } from 'react-native';
import Card from "../components/Card";
import colors from "../config/colors";
import routes from '../navigation/routes';

const listings = [
    {
        id: 1,
        title: 'Red Jacket',
        price: 100,
        image: require('../assets/images/redjacket.jpg'),
    },
    {
        id: 2,
        title: 'Couch',
        price: 1000,
        image: require('../assets/images/couch.jpg'),
    },
];

function ListingScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                )} 
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.white,
    }    
})

export default ListingScreen;