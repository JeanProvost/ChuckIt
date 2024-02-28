import React, { useState, useEffect } from "react";
import { Button, Image, Text } from "react-native";
import RegisterScreen from "./app/screens/RegisterScreen";
import EditListingScreen from "./app/screens/EditListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import * as ImagePicker from 'expo-image-picker';
import Screen from "./app/components/Screen";
import * as Permissions from 'expo-permissions';
import ImageInput from "./app/components/ImageInput";
import LoginScreen from "./app/screens/LoginScreen";
import ImageInputList from "./app/components/ImageInputList";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const BoardPost = () => (
  <Screen>
    <Text>Board Post</Text>
  </Screen>
);

const BoardDetails = () => (
  <Screen>
    <Text>Board Details</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="BoardPost">
    <Stack.Screen name="BoardPost" component={BoardPost}  />
    <Stack.Screen name="BoardDetails" component={BoardDetails}  />
  </Stack.Navigator>
);

export default function App() {
  
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}