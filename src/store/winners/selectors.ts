import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getCarsList } from '../carList/selectors';

export const getWinnersStateStatus = (state: RootState) => state.winners.status;
export const getWinnersList = (state: RootState) => state.winners.list;

const DEFAULT_CAR_DETAILS = { name: '', color: '' };

export const getWinnersWithCarDetails = createSelector(
  [getCarsList, getWinnersList],
  (carsList, winnersList) => {
    return winnersList.map((winner) => {
      const carDetails = carsList.find((car) => car.id === winner.id);
      return {
        ...winner,
        ...(carDetails
          ? { name: carDetails.name, color: carDetails.color }
          : DEFAULT_CAR_DETAILS),
      };
    });
  }
);
