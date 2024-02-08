import {createSlice} from '@reduxjs/toolkit';
import {TWord} from 'src/types/word';
import {getFromServe} from './actions';

export interface DetailState {
  detailWord: Partial<TWord>;
  loading: boolean;
}

const initialState: DetailState = {
  detailWord: {} as TWord,
  loading: false,
};

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetail: (state, action) => {
      state.loading = false;
      state.detailWord = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFromServe.pending, state => {
        state.loading = true;
      })
      .addCase(getFromServe.fulfilled, (state, action) => {
        state.loading = false;
        state.detailWord = action.payload;
      });
  },
});

export const {setDetail} = detailSlice.actions;

export default detailSlice.reducer;
