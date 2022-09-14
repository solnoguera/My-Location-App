import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MapsScreen, NewPlaceScreen, PlaceDetailScreen, PlaceListScreen } from "../screens/index";
import IonicIcons from "@expo/vector-icons/Ionicons";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Places"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.black,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: "Direcciones",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewPlace")}>
              <IonicIcons name="add-circle-outline" size={25} color={colors.black} />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: "Detalle de la Dirección" }}
      />

      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{ title: "Nueva Dirección" }}
      />

      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: "Mapa" }} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
