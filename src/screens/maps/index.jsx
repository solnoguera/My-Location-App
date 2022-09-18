import React, { useState, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import colors from "../../utils/colors";

const Maps = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const initialRegoin = {
    latitude: 50,
    longitude: -331,
    longitudeDelta: 0.45466,
    latitudeDelta: 0.6642,
  };
  const onHandlePickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };
  const onHandleSaveLocation = () => {
    if (!selectedLocation) return;
    navigation.navigate("NewPlace", { mapLocation: selectedLocation });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <IonicIcons name="md-save-sharp" size={24} color={colors.black} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onHandleSaveLocation]);
  return (
    <MapView initialRegion={initialRegoin} style={styles.container} onPress={onHandlePickLocation}>
      {selectedLocation && (
        <Marker
          title="Ubicación Seleccionada"
          coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }}
        />
      )}
    </MapView>
  );
};

export default Maps;
