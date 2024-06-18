import { Button, ButtonGroup } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';
import { deleteCar } from '../../../store/car/carThunk';

import { setUpdatedCarFormData } from '../../../store/carForm/carFormSlice';
import { getCarsList } from '../../../store/car/selectors';

interface ManagementButtonsProps {
  carID: number;
}

export function ManagementButtons({ carID }: ManagementButtonsProps) {
  const dispatch = useAppDispatch();

  const carsList = useSelector(getCarsList);

  const handleSelectButtonClick = () => {
    const selectedCar = carsList.find((car) => car.id === carID);
    dispatch(setUpdatedCarFormData(selectedCar));
  };

  const handleDeleteButtonClick = () => {
    dispatch(deleteCar(carID));
  };
  return (
    <ButtonGroup variant="outlined" size="small" orientation="vertical">
      <Button onClick={handleSelectButtonClick}>Select</Button>
      <Button onClick={handleDeleteButtonClick}>Remove</Button>
    </ButtonGroup>
  );
}
