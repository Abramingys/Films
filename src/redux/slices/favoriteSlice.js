import { createSlice } from '@reduxjs/toolkit';

import { setLocalStorageFavourite } from '../../utils/LocalStorageUtil';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const item = action.payload;
      state.favorites.push(item);
      setLocalStorageFavourite(state.favorites);
    },
    removeFromFavorites: (state, action) => {
      const itemId = action.payload;
      state.favorites = state.favorites.filter((item) => item !== itemId);
      setLocalStorageFavourite(state.favorites);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export const selectFavorites = (state) => state.favorite.favorites;

export default favoriteSlice.reducer;
