import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface HistoryState {
  list: string[];
}

const initialState: HistoryState = {
  list: [],
};

export const historySlice = createSlice({
  name: 'history',
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
    clearHistory: state => {
      state.list = [];
    },
  },
});

export const {addWord, removeWord, clearHistory} = historySlice.actions;

export default historySlice.reducer;
