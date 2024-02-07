import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface FavoritesState {
  list: string[];
}

const initialState: FavoritesState = {
  list: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<string>) => {
      const arr = state.list.filter(word => word !== action.payload);

      arr.unshift(action.payload);
      state.list = arr;
    },
    removeWord: (state, action: PayloadAction<string>) => {
      const arr = state.list.filter(word => word !== action.payload);
      state.list = arr;
    },
  },
});

export const {addWord, removeWord} = favoritesSlice.actions;

export default favoritesSlice.reducer;
