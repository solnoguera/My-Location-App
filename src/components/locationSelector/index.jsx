import React, { useState } from "react";
import { View, Text, Image, Alert, Button } from "react-native";
import * as Location from "expo-location";
import { styles } from "./styles";
import colors from "../../utils/colors";
import MapPreview from "../mapPreview";

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos Insuficientes", "Necesitamos permisos para usar la localización.", [
        { text: "Ok" },
      ]);
      return false;
    }
    return true;
  };

  const onHandleGetLocation = async () => {
    console.log("hola=");
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;
    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;
    console.log({ latitude, longitude });
    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
  };

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>No has seleccionado una ubicación</Text>
      </MapPreview>
      <View style={styles.buttons}>
        <Button title="Obtener Ubicación" color={colors.primary} onPress={onHandleGetLocation} />
        <Button title="Elegir desde el mapa" color={colors.secondary} onPress={() => null} />
      </View>
    </View>
  );
};

export default LocationSelector;
