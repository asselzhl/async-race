import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useAppDispatch } from '../../store/store';
import { getCarsList, getCarsStateStatus } from '../../store/carList/selectors';
import { getWinnersStateStatus } from '../../store/winners/selectors';
import { getGarageCurrentPage } from '../../store/pages/selectors';
import { stateStatus } from '../../store/constants';
import { getCars } from '../../store/carList/carListThunk';
import { getWinners } from '../../store/winners/winnersThunk';

interface CarsItem {
  id: number;
  name: string;
  color: string;
}

const CAR_PER_PAGE = 7;

const getCurrentCars = (carsList: CarsItem[], currentPage: number) => {
  const startIndex = (currentPage - 1) * CAR_PER_PAGE;
  return carsList.slice(startIndex, startIndex + CAR_PER_PAGE);
};

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
  }, [carsStatus, winnersStatus, dispatch]);

  const currentCars = useMemo(
    () => getCurrentCars(carsList, currentPage),
    [carsList, currentPage]
  );

  return {
    currentCars,
    totalCars,
    totalPages,
    currentPage,
  };
};
