import React, { useState } from "react";
import { View, Text, Image, Alert, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { styles } from "./styles";
import colors from "../../utils/colors";

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setpPickedUrl] = useState(null);
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso Denegado", "Necesitamos permisos para usar la cámara.", [
        { text: "Ok" },
      ]);
      return false;
    } else return true;
  };
  const onHandleTakeImage = async () => {
    const hasCameraPermission = await verifyPermissions();
    if (!hasCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    setpPickedUrl(image.uri);
    onImage(image.uri);
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text> No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Tomar Foto" color={colors.primary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;
