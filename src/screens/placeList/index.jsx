import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const PlaceList = ({ navigation }) => {
  const places = useSelector((store) => store.place.places);
  console.warn(places);
  return (
    <View style={styles.container}>
      <Text>PlaceList View</Text>
    </View>
  );
};

export default PlaceList;
