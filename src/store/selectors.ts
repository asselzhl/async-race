import { RootState } from './store';

export const getCarsStateStatus = (state: RootState) => state.cars.status;
export const getCarsList = (state: RootState) => state.cars.list;
