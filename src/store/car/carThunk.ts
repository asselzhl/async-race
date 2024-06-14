import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const agent = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getCars = createAsyncThunk('getCars', async (_, thunkApi) => {
  try {
    const data = await agent('/garage');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const createCar = createAsyncThunk(
  'createCar',
  async (carData, thunkApi) => {
    try {
      const data = await agent.post('/garage', carData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
