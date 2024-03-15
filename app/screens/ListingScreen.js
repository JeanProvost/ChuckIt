import React, { useState, useEffect } from 'react';
import Screen from '../components/Screen';
import { FlatList, StyleSheet } from 'react-native';
import Card from "../components/Card";
import colors from "../config/colors";
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import Button from '../components/AppButton/AppButton';

function ListingScreen({ navigation }) {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        const response = await listingsApi.getListings();
        if (!response.ok) {
            setError(true);
            return;
        } 
        setError(false);
        setListings(response.data);
    };

    return (
        <Screen style={styles.screen}>
            {error && <>
                <AppText>Couldn't retrieve the listings</AppText>
                <Button title='Retry' onPress={loadListings}/>
            </>}
            <FlatList 
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
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