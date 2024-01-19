import React, { useState } from "react";
import ListingScreen from "./app/screens/ListingScreen";
import { Switch, Text, TextInput } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1},
  { label: "Clothing", value: 2},
  { label: "Electronics", value: 3},
];

export default function App() {
  const [category, setCategory] = useState();
  
  const [isNew, setIsNew] = useState(false)

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories} 
        icon="apps" 
        placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}

