import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Button } from "react-native";
import colors from "../../utils/colors";
import { styles } from "./styles";
import { savePlace } from "../../store/place.slice";
import { useDispatch } from "react-redux";
import { ImageSelector, LocationSelector } from "../../components";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(savePlace(title, image, location));
    navigation.navigate("Places");
  };
  const onHandleImageSelected = (imageUrl) => {
    setImage(imageUrl);
  };

  const onHandleLocationSelected = (location) => {
    setLocation(location);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Agregar Nueva Dirección</Text>
        <TextInput
          style={styles.input}
          placeholder="Nueva Ubicación"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <ImageSelector onImage={onHandleImageSelected} />
        <LocationSelector onLocation={onHandleLocationSelected} />
        <View style={styles.buttom}>
          <Button
            title="Guardar dirección"
            color={colors.secondary}
            onPress={onHandleSubmit}></Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
