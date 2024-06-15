import { Pagination } from '@mui/material';

import { useSelector } from 'react-redux';
import styles from './GarageStatus.module.css';
import { getCarsList } from '../../store/selectors';

function GarageStatus() {
  const carsList = useSelector(getCarsList);

  return (
    <div className={styles.wrapper}>
      <p>
        Garage <span>({carsList.length})</span>
      </p>
      <Pagination count={10} shape="rounded" />
    </div>
  );
}
export default GarageStatus;
