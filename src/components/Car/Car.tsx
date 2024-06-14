import { Button, ButtonGroup } from '@mui/material';
import { FaCarSide } from 'react-icons/fa6';

import styles from './Car.module.css';

interface CarsItem {
  name: string;
  color: string;
  id: string;
}
interface CarProps {
  car: CarsItem;
}

function Car({ car }: CarProps) {
  return (
    <div className={styles.wrapper}>
      <ButtonGroup variant="outlined" size="small" orientation="vertical">
        <Button>Edit</Button>
        <Button>Remove</Button>
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
