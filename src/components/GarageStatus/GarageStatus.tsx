import { Pagination } from '@mui/material';

import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../store/store';
import { setGarageCurrentPage } from '../../store/pages/pagesSlice';

import styles from './GarageStatus.module.css';

interface GarageStatusProps {
  totalCars: number;
  totalPages: number;
  currentPage: number;
}

export function GarageStatus({
  totalCars,
  totalPages,
  currentPage,
}: GarageStatusProps) {
  const dispatch = useAppDispatch();

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    dispatch(setGarageCurrentPage(value));
  };
  return (
    <div className={styles.wrapper}>
      <p>
        Garage <span>({totalCars})</span>
      </p>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
      />
    </div>
  );
}
