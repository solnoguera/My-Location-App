import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import PlacesNavigator from "./places";

export default () => (
  <NavigationContainer>
    <PlacesNavigator />
  </NavigationContainer>
);
