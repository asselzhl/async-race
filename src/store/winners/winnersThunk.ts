import { createAsyncThunk } from '@reduxjs/toolkit';
import { agent } from '../car/carThunk';

interface SortValue {
  sortBy: string;
  orderBy: string;
}

export const getWinners = createAsyncThunk(
  'getWinners',
  async (sortValue: SortValue, thunkApi) => {
    try {
      const data = await agent(
        `/winners/?_sort=${sortValue.sortBy}&_order=${sortValue.orderBy}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
