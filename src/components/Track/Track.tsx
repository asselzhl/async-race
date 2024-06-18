import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/store';
import { Car } from '../Car/Car';

import { stateStatus } from '../../store/constants';
import { getCars } from '../../store/car/carThunk';
import { GarageStatus } from '../GarageStatus/GarageStatus';
import { getCarsList, getCarsStateStatus } from '../../store/car/selectors';
import { getCurrentPage } from '../../store/pages/selectors';

export function Track() {
  const dispatch = useAppDispatch();

  const carsStatus = useSelector(getCarsStateStatus);
  const carsList = useSelector(getCarsList);

  const currentPage = useSelector(getCurrentPage);

  const carsPerPage = 7;
  const totalCars = carsList.length;
  const totalPages = Math.ceil(totalCars / carsPerPage);

  useEffect(() => {
    if (carsStatus === stateStatus.idle) {
      dispatch(getCars());
    }
  }, [carsStatus, dispatch]);

  const startIndex = (currentPage - 1) * carsPerPage;
  const currentCars = carsList.slice(startIndex, startIndex + carsPerPage);

  return (
    <>
      <ul>
        {currentCars.map((car) => {
          return <Car key={car.id} car={car} />;
        })}
      </ul>

      <GarageStatus
        totalCars={totalCars}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
}
