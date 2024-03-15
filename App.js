import React, { useState, useEffect } from "react";
import { Button, Image, Text } from "react-native";
import RegisterScreen from "./app/screens/RegisterScreen";
import EditListingScreen from "./app/screens/EditListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from "./app/components/Screen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import defaultStyles from '../ChuckIt/app/config/colors';
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button 
      title="View Post"
      onPress={() => navigation.navigate('PostDetails', { id: 1 }) }
    />
  );
};

const Post = ({ navigation }) => (
  <Screen>
    <Text> Post</Text>
    <Link />
  </Screen>
);

const PostDetails = ({ route }) => (
  <Screen>
    <Text> PostDetails {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Post" component={Post} />
    <Stack.Screen name="PostDetails" component={PostDetails}/>
  </Stack.Navigator>
);

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Post} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export default function App() {
  
  return (
    <NavigationContainer theme={NavigationTheme} >
      <AppNavigator />
    </NavigationContainer>
  );
}