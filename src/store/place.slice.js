import { createSlice } from "@reduxjs/toolkit";
import Place from "../models/places";
import * as FileSystem from "expo-file-system";
import { URL_GEOCODING } from "../utils/maps";
//El slice junta las acciones y los reductores en un solo ambiente.
const initialState = {
  places: [],
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        Date.now(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
  },
});
export const savePlace = (title, image, coords) => {
  return async (dispatch) => {
    // const fileName = image.split("/").pop();
    // const Path = FileSystem.documentDirectory + fileName;
    try {
      // await FileSystem.moveAsync({
      //   from: image,
      //   to: Path,
      // });
      const response = await fetch(URL_GEOCODING(coords.lat, coords.lng));
      if (!response.ok) throw new Error("No se ha podido conectar con el servidor.");
      const data = await response.json();
      if (!data.results) throw new Error("No se ha podido encontrar la dirección.");
      const address = data.results[0].formatted_address;
      dispatch(addPlace({ title, image, address, coords }));
    } catch (error) {
      console.log(error);
    }
  };
};
export const { addPlace } = placesSlice.actions;
export default placesSlice.reducer;
