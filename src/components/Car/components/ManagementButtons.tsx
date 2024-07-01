import { Button, ButtonGroup } from '@mui/material';
import { useAppDispatch } from '../../../store/store';
import { deleteCar } from '../../../store/car/carThunk';

import { setUpdatedCarFormData } from '../../../store/carForm/carFormSlice';

interface CarsItem {
  name: string;
  color: string;
  id: number;
}
interface ManagementButtonsProps {
  car: CarsItem;
}

export function ManagementButtons({ car }: ManagementButtonsProps) {
  const dispatch = useAppDispatch();

  const handleSelectButtonClick = () => {
    dispatch(setUpdatedCarFormData(car));
  };

  const handleDeleteButtonClick = () => {
    dispatch(deleteCar(car.id));
  };
  return (
    <ButtonGroup variant="outlined" size="small" orientation="vertical">
      <Button onClick={handleSelectButtonClick}>Select</Button>
      <Button onClick={handleDeleteButtonClick}>Remove</Button>
    </ButtonGroup>
  );
}
