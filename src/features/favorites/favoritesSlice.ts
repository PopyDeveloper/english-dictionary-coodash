import {createSlice} from '@reduxjs/toolkit';
import {getFavoritesByUid, toggleFavorite} from './actions';

export interface FavoritesState {
  list: string[];
}

const initialState: FavoritesState = {
  list: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFavoritesByUid.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        if (action.payload) {
          state.list = action.payload;
        }
      });
  },
});

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
