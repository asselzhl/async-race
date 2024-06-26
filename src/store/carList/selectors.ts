import { RootState } from '../store';

export const getCarsStateStatus = (state: RootState) => state.carList.status;
export const getCarsList = (state: RootState) => state.carList.list;
