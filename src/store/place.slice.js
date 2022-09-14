import { createSlice } from "@reduxjs/toolkit";
import Place from "../models/places";
import * as FileSystem from "expo-file-system";
//El slice junta las acciones y los reductores en un solo ambiente.
const initialState = {
  places: [],
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(Date.now(), action.payload.title, action.payload.image);
      state.places.push(newPlace);
    },
  },
});
export const savePlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
    } catch (error) {
      console.log(error);
    }
    dispatch(addPlace({ title, image: Path }));
  };
};
export const { addPlace } = placesSlice.actions;
export default placesSlice.reducer;
