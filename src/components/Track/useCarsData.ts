import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/store';
import { getCarsList, getCarsStateStatus } from '../../store/carList/selectors';
import { getWinnersStateStatus } from '../../store/winners/selectors';
import { getGarageCurrentPage } from '../../store/pages/selectors';
import { stateStatus } from '../../store/constants';
import { getCars } from '../../store/carList/carListThunk';
import { getWinners } from '../../store/winners/winnersThunk';

export const useCarsData = () => {
  const dispatch = useAppDispatch();

  const carsStatus = useSelector(getCarsStateStatus);
  const carsList = useSelector(getCarsList);

  const winnersStatus = useSelector(getWinnersStateStatus);

  const currentPage = useSelector(getGarageCurrentPage);

  const carsPerPage = 7;
  const totalCars = carsList.length;
  const totalPages = Math.ceil(totalCars / carsPerPage);

  useEffect(() => {
    if (carsStatus === stateStatus.idle) {
      dispatch(getCars());
    }
    if (winnersStatus === stateStatus.idle) {
      dispatch(
        getWinners({
          sortBy: 'id',
          orderBy: 'ASC',
        })
      );
    }
  }, [carsStatus, dispatch, winnersStatus]);

  const startIndex = (currentPage - 1) * carsPerPage;
  const currentCars = carsList.slice(startIndex, startIndex + carsPerPage);

  return {
    currentCars,
    totalCars,
    totalPages,
    currentPage,
  };
};
