import { createSlice } from "@reduxjs/toolkit";
import Place from "../models/places";
//El slice junta las acciones y los reductores en un solo ambiente.
const initialState = {
  places: [],
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(Date.now(), action.payload);
      state.places.push(newPlace);
    },
  },
});

export const { addPlace } = placesSlice.actions;
export default placesSlice.reducer;
