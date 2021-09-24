import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";

// ================ LOCAL JSON FILE LOAD ================ //
import country_data from "./constants/country.json";
import state_data from "./constants/state.json";
import city_data from "./constants/city.json";

const width = Dimensions.get("window").width;

// ================ DROP DOWN COMPONENT ================ //
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
            this.props.onChange(index);
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

// ================ DEFAULT EXPORTING APP ================ //
export default function App() {
  // ================ LOCAL STATES FOR ITEMS ================ //
  const [country, setCountry] = useState(
    country_data.map((value) => {
      return value.name;
    })
  );
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  // ================ WHEN COUNTRY IS CHANGED ================ //
  const onFilterState = (id) => {
    var country_id = id + 1;
    var state_array = [];
    state_data.map((value) => {
      if (value.country_id == country_id) {
        state_array.push(value.name);
      }
    });
    setState(state_array);
  };
  // ================ WHEN STATE IS CHANGED ================ //
  const onFilterCity = (id) => {
    var state_id = id + 1;
    console.log(state_id);
    var city_array = [];
    city_data.map((value) => {
      if (value.state_id == state_id) {
        city_array.push(value.name);
      }
    });
    setCity(city_array);
  };
  // ================ WHEN CITY IS SELECTED ================ //
  const onSubmit = () => {
    alert("Your address saved !");
  };

  // ================ DEFAULT RETURN STATEMENT ================ //
  return (
    <View style={styles.container}>
      <DropDown
        placeholder="Select Country"
        value={country}
        onChange={onFilterState}
      />
      <DropDown
        placeholder="Select State"
        value={state}
        onChange={onFilterCity}
      />
      <DropDown placeholder="Select City" value={city} onChange={onSubmit} />
    </View>
  );
}
// ================ STYLING FOR CONTAINER ================ //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
