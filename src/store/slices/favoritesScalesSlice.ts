import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Scale = {
  name: string;
  rootNote: string;
  scaleNotes: string[];
};

const initialState: Scale[] = [];

const favoritesScalesSlice = createSlice({
  name: 'favoritesScales',
  initialState,
  reducers: {
    addScale(state, action: PayloadAction<Scale>) {
      console.log('adding scale');
      const existingIndex = state.findIndex(
        scale =>
          scale.name === action.payload.name &&
          scale.rootNote === action.payload.rootNote,
      );
      if (existingIndex === -1) {
        state.push(action.payload);
      }
    },
    removeScaleByName(state, action: PayloadAction<Scale>) {
      console.log('removing scale ' + action.payload);
      state = state.filter(
        state =>
          state.name !== action.payload.name &&
          state.rootNote !== action.payload.rootNote,
      );
    },
  },
});

export const { addScale, removeScaleByName } = favoritesScalesSlice.actions;

export default favoritesScalesSlice.reducer;
