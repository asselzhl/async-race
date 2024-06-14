import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/store';
import Car from '../Car/Car';
import { getCarsList, getCarsStateStatus } from '../../store/selectors';
import { stateStatus } from '../../store/constants';
import { getCars } from '../../store/car/carThunk';

function Track() {
  const dispatch = useAppDispatch();

  const carsStatus = useSelector(getCarsStateStatus);
  const carsList = useSelector(getCarsList);

  useEffect(() => {
    if (carsStatus === stateStatus.idle) {
      dispatch(getCars());
    }
  }, [carsStatus, dispatch]);

  return (
    <ul>
      {carsList.map((car) => {
        return <Car key={car.id} car={car} />;
      })}
    </ul>
  );
}
export default Track;
