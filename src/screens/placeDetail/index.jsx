import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import { MapPreview } from "../../components";
import { styles } from "./styles";

const PlaceDetail = ({ navigation, route }) => {
  const placeId = route?.params?.placeId;
  const place = useSelector((store) => store.place.places.find((place) => place.id === placeId));
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview location={place.coords} style={styles.map}>
          <Text>Ubicación no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
