import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import country from "./constants/country.json";

const width = Dimensions.get("window").width;
export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [name, setName] = useState(
    country.map((value) => {
      return value.name;
    })
  );

  console.log(name);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={{
          width: width - 50,
        }}
        placeholder="Select Country"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
