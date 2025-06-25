import { configureStore } from '@reduxjs/toolkit';
import favoriteScaleSliceReducer from '@store/slices/favoritesScalesSlice';

export const store = configureStore({
  reducer: {
    favoriteScaleSlice: favoriteScaleSliceReducer,
  },
});
