import {createSlice} from '@reduxjs/toolkit';
import {getList, setHistoricInFirestore} from './actions';
import {TWord} from 'src/types/word';

export interface HistoryState {
  list: TWord[];
}

const initialState: HistoryState = {
  list: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getList.fulfilled, (state, action) => {
        if (action.payload.length > 0) {
          state.list = action.payload;
        }
      })
      .addCase(setHistoricInFirestore.pending, state => state)
      .addCase(setHistoricInFirestore.fulfilled, (state, action) => {
        if (action.payload) {
          state.list = action.payload;
        }
      });
  },
});

export const {} = historySlice.actions;

export default historySlice.reducer;
