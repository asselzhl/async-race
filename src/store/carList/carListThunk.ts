import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const agent = axios.create({
  baseURL: 'http://localhost:3000',
});

interface CarFormData {
  name: string;
  color: string;
  id?: number;
}

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
  async (carFormData: CarFormData, thunkApi) => {
    try {
      const data = await agent.post('/garage', carFormData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateCar = createAsyncThunk(
  'updateCar',
  async (carFormData: CarFormData, thunkApi) => {
    const endpoint = `/garage/${carFormData.id}`;
    const { name, color } = carFormData;
    const updatedCar = { name, color };
    try {
      const data = await agent.put(endpoint, updatedCar);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteCar = createAsyncThunk(
  'deleteCar',
  async (id: number, thunkApi) => {
    const endpoint = `/garage/${id}`;
    try {
      const data = await agent.delete(endpoint);
      return { data, id };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
