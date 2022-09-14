import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Button } from "react-native";
import colors from "../../utils/colors";
import { styles } from "./styles";
import { addPlace } from "../../store/place.slice";
import { useDispatch } from "react-redux";
import { ImageSelector } from "../../components";

const NewPlace = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const onHandleSubmit = () => {
    dispatch(addPlace(location));
    navigation.navigate("Places");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>New Place View</Text>
        <TextInput
          style={styles.input}
          placeholder="Nueva Ubicación"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <ImageSelector onImage={() => null} />
        <Button title="Añadir dirección" color={colors.primary} onPress={onHandleSubmit}></Button>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
