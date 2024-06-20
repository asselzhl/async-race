import { RootState } from '../store';

export const getGarageCurrentPage = (state: RootState) =>
  state.pages.garage.currentPage;
export const getWinnersCurrentPage = (state: RootState) =>
  state.pages.winners.currentPage;
