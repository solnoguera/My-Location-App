import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Button } from "react-native";
import colors from "../../utils/colors";
import { styles } from "./styles";
import { savePlace } from "../../store/place.slice";
import { useDispatch } from "react-redux";
import { ImageSelector } from "../../components";

const NewPlace = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(savePlace(location, image));
    navigation.navigate("Places");
  };
  const onHandleImageSelected = (imageUrl) => {
    setImage(imageUrl);
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
        <ImageSelector onImage={onHandleImageSelected} />
        <View style={styles.buttom}>
          <Button
            title="Añadir dirección"
            color={colors.secondary}
            onPress={onHandleSubmit}></Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
