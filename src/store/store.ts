import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { carReducer } from './car/carSlice';
import { carFormReducer } from './carForm/carFormSlice';
import { pagesReducer } from './pages/pagesSlice';
import { raceReducer } from './race/raceSlice';
import { winnersReducer } from './winners/winnersSlice';

export const rootReducer = combineReducers({
  cars: carReducer,
  carForm: carFormReducer,
  pages: pagesReducer,
  race: raceReducer,
  winners: winnersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'getCars/fulfilled',
          'getCars/rejected',
          'createCar/fulfilled',
          'createCar/rejected',
          'deleteCar/fulfilled',
          'deleteCar/rejected',
          'updateCar/fulfilled',
          'updateCar/rejected',
          'getWinners/fulfilled',
          'getWinners/rejected',
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
