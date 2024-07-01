import { FaCarSide } from 'react-icons/fa6';

import styles from '../Car.module.css';

interface CarIconProps {
  color: string;
  carStyle: object;
}

export function CarIcon({ color, carStyle }: CarIconProps) {
  return (
    <FaCarSide
      size={70}
      color={color}
      className={styles.car}
      style={carStyle}
    />
  );
}
