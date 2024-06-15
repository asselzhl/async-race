import { Button, ButtonGroup } from '@mui/material';
import { FaCarSide } from 'react-icons/fa6';

import styles from './Car.module.css';
import { useAppDispatch } from '../../store/store';
import { deleteCar } from '../../store/car/carThunk';

interface CarsItem {
  name: string;
  color: string;
  id: string;
}
interface CarProps {
  car: CarsItem;
}

function Car({ car }: CarProps) {
  const dispatch = useAppDispatch();

  const handleDeleteButtonClick = () => {
    dispatch(deleteCar(car.id));
  };
  return (
    <div className={styles.wrapper}>
      <ButtonGroup variant="outlined" size="small" orientation="vertical">
        <Button>Edit</Button>
        <Button onClick={handleDeleteButtonClick}>Remove</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" size="small" orientation="vertical">
        <Button>A</Button>
        <Button>B</Button>
      </ButtonGroup>

      <div>
        <FaCarSide size={70} color={car.color} />
      </div>

      <div>
        <h5 className={styles['car-name']}>{car.name}</h5>
      </div>
    </div>
  );
}
export default Car;
