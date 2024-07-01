import { Button, ButtonGroup } from '@mui/material';
import { useAppDispatch } from '../../../store/store';
import { deleteCar } from '../../../store/carList/carListThunk';

import { setUpdatedCarFormData } from '../../../store/carForm/carFormSlice';
import { deleteWinner } from '../../../store/winners/winnersThunk';

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
    dispatch(deleteWinner(car.id));
  };
  return (
    <ButtonGroup variant="outlined" size="small" orientation="vertical">
      <Button onClick={handleSelectButtonClick}>Select</Button>
      <Button onClick={handleDeleteButtonClick}>Remove</Button>
    </ButtonGroup>
  );
}
