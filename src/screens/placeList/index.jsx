import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { loadPlaces } from "../../store/place.slice";
import { PlaceItem } from "../../components";

const PlaceList = ({ navigation }) => {
  const places = useSelector((store) => store.place.places);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPlaces());
  }, []);
  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />
  );
  const ListEmptyContainer = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No hay lugares creados.</Text>
    </View>
  );
  return (
    <FlatList
      style={styles.container}
      data={places}
      keyExtractor={(item) => item?.id?.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyContainer}
    />
  );
};

export default PlaceList;
