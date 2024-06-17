import { FaCarSide } from 'react-icons/fa6';

import styles from './Car.module.css';

import ManagementButtons from './components/ManagementButtons';
import EngineControlButtons from './components/EngineControlButtons';

interface CarsItem {
  name: string;
  color: string;
  id: number;
}
interface CarProps {
  car: CarsItem;
}

function Car({ car }: CarProps) {
  return (
    <div className={styles.wrapper}>
      <ManagementButtons carID={car.id} />
      <EngineControlButtons />

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
