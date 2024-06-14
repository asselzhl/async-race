import { Pagination } from '@mui/material';

import styles from './GarageStatus.module.css';

function GarageStatus() {
  return (
    <div className={styles.wrapper}>
      <p>
        Garage <span>(0)</span>
      </p>
      <Pagination count={10} shape="rounded" />
    </div>
  );
}
export default GarageStatus;
