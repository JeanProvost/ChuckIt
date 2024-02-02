import React, { useState, useEffect } from "react";
import { Button, Image } from "react-native";
import RegisterScreen from "./app/screens/RegisterScreen";
import EditListingScreen from "./app/screens/EditListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import * as ImagePicker from 'expo-image-picker';
import Screen from "./app/components/Screen";
import * as Permissions from 'expo-permissions';
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [ imageUri, setImageUri ] = useState();
  const requestPermission = async () => {
    //const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION_FOREGROUND);
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!granted) {
      alert('You need to enable permission to access the library.');
    }
  };
  useEffect( () => {
    requestPermission();
  }, []);

const selectImage = async () => {

  try {
    const result = await ImagePicker.launchImageLibraryAsync();
    if(!result.canceled) {
      setImageUri(result.uri);
    }
  } catch (error) {
    console.log('Error selecting image', error);
    
    }
  }

  return <Screen>
    <ImageInput 
      onChangeImage={(uri) => setImageUri(uri)}
      imageUri={imageUri}/>
  </Screen>;
}