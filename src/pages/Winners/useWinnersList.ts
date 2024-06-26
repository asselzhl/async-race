import { ChangeEvent, useEffect, useMemo, useState } from 'react';
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

type SortBy = 'id' | 'wins' | 'time';
type OrderBy = 'ASC' | 'DESC';
interface SortParams {
  sortBy: SortBy;
  orderBy: OrderBy;
}
interface WinnersItem {
  id: number;
  color: string;
  name: string;
  wins: number;
  time: number;
}

const WINNERS_PER_PAGE = 10;

const getCurrentWinners = (winnersList: WinnersItem[], currentPage: number) => {
  const startIndex = (currentPage - 1) * WINNERS_PER_PAGE;
  return winnersList.slice(startIndex, startIndex + WINNERS_PER_PAGE);
};

const getTotalPages = (totalWinners: number) => {
  return Math.ceil(totalWinners / WINNERS_PER_PAGE);
};

export const useWinnersList = () => {
  const dispatch = useAppDispatch();
  const [sortCriteria, setSortCriteria] = useState<SortParams>({
    sortBy: 'id',
    orderBy: 'ASC',
  });

  const carsStatus = useSelector(getCarsStateStatus);
  const winnersStatus = useSelector(getWinnersStateStatus);
  const winnersList = useSelector(getWinnersWithCarDetails);
  const currentPage = useSelector(getWinnersCurrentPage);
  const totalWinners = winnersList.length;
  const totalPages = useMemo(() => getTotalPages(totalWinners), [totalWinners]);
  useEffect(() => {
    if (winnersStatus === stateStatus.idle) {
      dispatch(getWinners(sortCriteria));
    }
    if (carsStatus === stateStatus.idle) {
      dispatch(getCars());
    }
  }, [winnersStatus, carsStatus, sortCriteria, dispatch]);
  const currentWinners = useMemo(
    () => getCurrentWinners(winnersList, currentPage),
    [winnersList, currentPage]
  );
  const handleSortParamsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newSortCriteria = { ...sortCriteria, [name]: value };
    setSortCriteria(newSortCriteria);
    dispatch(getWinners(newSortCriteria));
  };
  return {
    sortCriteria,
    handleSortParamsChange,
    currentWinners,
    totalWinners,
    totalPages,
    currentPage,
  };
};
