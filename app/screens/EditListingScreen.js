import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { AppFormField, SubmitButton, AppFormPicker } from '../components/Forms';
import AppForm from '../components/Forms/AppForm';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
    price: Yup.string().required().label("Price"),
    category: Yup.string().required().label("Category"),
    description: Yup.string().required().nullable().label("Description")
});

const categories = [
    { label: "Furniture", backgroundColor: 'red', icon: 'bed-empty', value: 1},
    { label: "Clothing", backgroundColor: 'green', icon: 'shopping', value: 2},
    { label: "Electronics", backgroundColor: 'blue', icon: 'email', value: 3},
    { label: "Vehicles", backgroundColor: 'yellow', icon: 'car', value: 4},
    { label: "Books", backgroundColor: 'lightblue', icon: 'book', value: 5},
    { label: "Misc", backgroundColor: 'purple', icon: 'bowl-mix', value: 6},
  ];

function EditListingScreen(props) {
    const [category, setCategory] = useState();
    const [isNew, setIsNew] = useState(false);

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{title: '', price: '', category: null, description: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Title"
                    name="title"
                    maxLength={255}
                />
                <AppFormField 
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