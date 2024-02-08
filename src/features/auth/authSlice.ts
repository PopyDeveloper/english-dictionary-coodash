import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {clearStorage} from 'src/utils/storage';
import {saveUserSection} from './actions';

export interface AuthState {
  token: string | null;
  uid: string;
}

const initialState: AuthState = {
  token: null,
  uid: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.uid = action.payload.uid;
    },
    removeToken: state => {
      state.token = null;
      clearStorage();
    },
  },
  extraReducers: build => {
    build.addCase(saveUserSection.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.uid = action.payload.uid;
    });
  },
});

export const {setAuth, removeToken} = authSlice.actions;

export default authSlice.reducer;
