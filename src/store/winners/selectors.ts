import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getCarsList } from '../car/selectors';

export const getWinnersStateStatus = (state: RootState) => state.winners.status;
export const getWinnersList = (state: RootState) => state.winners.list;

export const getWinnersWithCarDetails = createSelector(
  [getCarsList, getWinnersList],
  (carsList, winnersList) => {
    return winnersList.map((winner) => {
      const carDetails = carsList.find((car) => car.id === winner.id);
      return {
        ...winner,
        name: carDetails ? carDetails.name : '',
        color: carDetails ? carDetails.color : '',
      };
    });
  }
);
