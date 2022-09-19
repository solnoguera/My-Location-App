import { createSlice } from "@reduxjs/toolkit";
import Place from "../models/places";
import * as FileSystem from "expo-file-system";
import { URL_GEOCODING } from "../utils/maps";
import { insertPlace, getPlaces } from "../db";
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
        action.payload.id.toString(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
    setPlaces: (state, action) => {
      state.places = action.payload;
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
      const result = await insertPlace(title, image, address, coords); // Guardamos en SQLite
      dispatch(addPlace({ id: result.insertId, title, image, address, coords }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const result = await getPlaces();
      const locations = result.rows._array.map((location) => ({
        ...location,
        coords: JSON.parse(location.coords),
      }));
      dispatch(setPlaces(locations));
    } catch (error) {
      console.log(error);
    }
  };
};
export const { addPlace, setPlaces } = placesSlice.actions;
export default placesSlice.reducer;
