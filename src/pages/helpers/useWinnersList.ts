import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { getCarsStateStatus } from '../../store/carList/selectors';
import {
  getWinnersStateStatus,
  getWinnersWithCarDetails,
} from '../../store/winners/selectors';
import { getWinnersCurrentPage } from '../../store/pages/selectors';
import { stateStatus } from '../../store/constants';
import { getWinners } from '../../store/winners/winnersThunk';
import { getCars } from '../../store/carList/carListThunk';

interface WinnersItem {
  id: number;
  color: string;
  name: string;
  wins: number;
  time: number;
}

const winnersPerPage = 10;

const getCurrentWinners = (winnersList: WinnersItem[], currentPage: number) => {
  const startIndex = (currentPage - 1) * winnersPerPage;
  return winnersList.slice(startIndex, startIndex + winnersPerPage);
};

export const useWinnersList = () => {
  const dispatch = useAppDispatch();
  const [sortCriteria, setSortCriteria] = useState({
    sortBy: 'id',
    orderBy: 'ASC',
  });

  const carsStatus = useSelector(getCarsStateStatus);
  const winnersStatus = useSelector(getWinnersStateStatus);
  const winnersList = useSelector(getWinnersWithCarDetails);
  const currentPage = useSelector(getWinnersCurrentPage);
  const totalWinners = winnersList.length;
  const totalPages = Math.ceil(totalWinners / winnersPerPage);

  useEffect(() => {
    if (winnersStatus === stateStatus.idle) {
      dispatch(getWinners(sortCriteria));
    }
    if (carsStatus === stateStatus.idle) {
      dispatch(getCars());
    }
  });
  const currentWinners = getCurrentWinners(winnersList, currentPage);

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newSortCriteria = { ...sortCriteria, [name]: value };
    setSortCriteria(newSortCriteria);
    dispatch(getWinners(newSortCriteria));
  };

  return {
    sortCriteria,
    handleSortChange,
    currentWinners,
    totalWinners,
    totalPages,
    currentPage,
  };
};
