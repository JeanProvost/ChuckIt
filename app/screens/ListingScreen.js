import React, { useState, useEffect } from 'react';
import Screen from '../components/Screen';
import { FlatList, StyleSheet } from 'react-native';
import Card from "../components/Card";
import colors from "../config/colors";
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import Button from '../components/AppButton/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';
import listingsApi from '../api/listings';

function ListingScreen({ navigation }) {
    const {data: listings, error, loading, request: loadListings } = useApi(
        listingsApi.getListings
    );

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <Screen style={styles.screen}>
            {error && <>
                <AppText>Couldn't retrieve the listings</AppText>
                <Button title='Retry' onPress={loadListings}/>
            </>}
            <ActivityIndicator visible={loading} />
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