import React from "react";
import { View, Image, Text } from "react-native";
import { URL_MAPS } from "../../utils/maps";
import { styles } from "./styles";

const MapPreview = ({ children, location, style }) => {
  const { lat, lng } = location || {};
  const mapPreviewUrl = location ? URL_MAPS(lat, lng) : "";
  console.log({ mapPreviewUrl });
  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? <Image style={styles.mapPreview} source={{ uri: mapPreviewUrl }} /> : children}
    </View>
  );
};

export default MapPreview;