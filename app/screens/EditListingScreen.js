import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { AppFormField, SubmitButton, AppFormPicker } from '../components/Forms';
import AppForm from '../components/Forms/AppForm';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingApi from '../api/listings';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
  });

const categories = [
    { label: "Furniture", backgroundColor: "red", icon: "bed-empty", value: 1},
    { label: "Clothing", backgroundColor: 'green', icon: 'shopping', value: 2},
    { label: "Electronics", backgroundColor: 'blue', icon: 'email', value: 3},
    { label: "Vehicles", backgroundColor: 'yellow', icon: 'car', value: 4},
    { label: "Books", backgroundColor: 'lightblue', icon: 'book', value: 5},
    { label: "Misc", backgroundColor: 'purple', icon: 'bowl-mix', value: 6},
  ];

function EditListingScreen(props) {
    const [category, setCategory] = useState();
    //const [isNew, setIsNew] = useState(false);
    const location = useLocation();
    const handleSubmit = async (listing) => {
        const result = await listingApi.addListing({...listing, location});
        if (!result.ok) {
            const errorMessage = result.data.error || 'Could not save the listing';
            return alert(errorMessage);
        } else {
            alert('Success');
        }
    };

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "", 
                    price: "", 
                    category: null, 
                    description: "",
                    images: [],
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Title"
                    name="title"
                    maxLength={255}
                />
                <AppFormField
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Price"
                    name="price"
                    width={120}
                />
                <AppFormPicker 
                    name="category"
                    placeholder="Category"
                    selectedItem={category}
                    items={categories}
                    width="50%"
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <AppFormField 
                    name="description"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default EditListingScreen;