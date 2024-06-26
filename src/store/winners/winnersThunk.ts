import { createAsyncThunk } from '@reduxjs/toolkit';
import { agent } from '../carList/carListThunk';

interface SortValue {
  sortBy: string;
  orderBy: string;
}

interface Winner {
  id: number | string;
  wins: number;
  time: number;
}

interface UpdatedWinner {
  id: number;
  winnerData: {
    wins: number;
    time: number;
  };
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

export const createWinner = createAsyncThunk(
  'createWinner',
  async (winnerDetails: Winner, thunkApi) => {
    try {
      const data = await agent.post('/winners', winnerDetails);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateWinner = createAsyncThunk(
  'updateWinner',
  async (updatedWinner: UpdatedWinner, thunkApi) => {
    try {
      const data = await agent.put(
        `/winners/${updatedWinner.id}`,
        updatedWinner.winnerData
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteWinner = createAsyncThunk(
  'deleteWinner',
  async (id: number, thunkApi) => {
    const endpoint = `/winners/${id}`;
    try {
      const data = await agent.delete(endpoint);
      return { data, id };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
