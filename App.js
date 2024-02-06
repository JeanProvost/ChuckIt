import React, { useState, useEffect } from "react";
import { Button, Image } from "react-native";
import RegisterScreen from "./app/screens/RegisterScreen";
import EditListingScreen from "./app/screens/EditListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import * as ImagePicker from 'expo-image-picker';
import Screen from "./app/components/Screen";
import * as Permissions from 'expo-permissions';
import ImageInput from "./app/components/ImageInput";
import LoginScreen from "./app/screens/LoginScreen";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [ imageUris, setImageUris ] = useState([]);

  return <EditListingScreen />
}