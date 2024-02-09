import {createAsyncThunk} from '@reduxjs/toolkit';
import {getDetail} from 'src/sevices/api';

export const getFromServe = createAsyncThunk(
  'detail/getFromServe',
  async (word: string) => {
    const res = await getDetail(word);

    if (res) {
      return res[0];
    }

    return {word};
  },
);
