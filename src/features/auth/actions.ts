import {createAsyncThunk} from '@reduxjs/toolkit';
import {AUTH_TOKEN} from 'src/contants/StorageKeys';
import {saveInStorage} from 'src/utils/storage';

export const saveUserSection = createAsyncThunk(
  'auth/saveUserSection',
  async (auth: {uid: string; token: string}) => {
    saveInStorage(AUTH_TOKEN, auth);
    return auth;
  },
);
