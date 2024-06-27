import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/store';
import { getCarsList, getCarsStateStatus } from '../../store/carList/selectors';
import { getWinnersStateStatus } from '../../store/winners/selectors';
import { getGarageCurrentPage } from '../../store/pages/selectors';
import { stateStatus } from '../../store/constants';
import { getCars } from '../../store/carList/carListThunk';
import { getWinners } from '../../store/winners/winnersThunk';

const CAR_PER_PAGE = 7;

export const useCarsData = () => {
  const dispatch = useAppDispatch();

  const carsStatus = useSelector(getCarsStateStatus);
  const carsList = useSelector(getCarsList);

  const winnersStatus = useSelector(getWinnersStateStatus);

  const currentPage = useSelector(getGarageCurrentPage);

  const totalCars = carsList.length;
  const totalPages = Math.ceil(totalCars / CAR_PER_PAGE);

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

  const startIndex = (currentPage - 1) * CAR_PER_PAGE;
  const currentCars = carsList.slice(startIndex, startIndex + CAR_PER_PAGE);

  return {
    currentCars,
    totalCars,
    totalPages,
    currentPage,
  };
};
