import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";
import country_data from "./constants/country.json";
import state_data from "./constants/state.json";
import city_data from "./constants/city.json";

const width = Dimensions.get("window").width;

class DropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          paddingVertical: 10,
        }}
      >
        <ModalDropdown
          options={this.props.value}
          defaultValue={this.props.placeholder}
          onSelect={(index, value) => {
            console.log(value);
          }}
          style={{
            borderWidth: 1,
            padding: 10,
            width: width - 30,
          }}
          textStyle={{
            fontSize: 15,
            color: "black",
          }}
          dropdownStyle={{
            backgroundColor: "white",
            width: width - 60,
          }}
          dropdownTextStyle={{
            fontSize: 15,
            color: "black",
          }}
          renderRightComponent={() => {
            return <Entypo name="chevron-down" size={24} color="black" />;
          }}
          buttonAndRightComponentContainerStyle={{
            justifyContent: "space-between",
          }}
        />
      </View>
    );
  }
}

export default function App() {
  const [country, setCountry] = useState(
    country_data.map((value) => {
      return value.name;
    })
  );
  const [state, setState] = useState(
    state_data.map((value) => {
      return value.name;
    })
  );
  const [city, setCity] = useState(
    city_data.map((value) => {
      return value.name;
    })
  );

  return (
    <View style={styles.container}>
      <DropDown placeholder="Select Country" value={country} />
      <DropDown placeholder="Select State" value={state} />
      <DropDown placeholder="Select City" value={city} />
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
