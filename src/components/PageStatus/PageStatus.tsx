import { ChangeEvent } from 'react';
import { Pagination } from '@mui/material';
import { useAppDispatch } from '../../store/store';

import styles from './PageStatus.module.css';

interface PageStatusProps {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  action: (page: number) => { type: string; payload: number };
  pageTitle: string;
}

export function PageStatus({
  totalItems,
  totalPages,
  currentPage,
  action,
  pageTitle,
}: PageStatusProps) {
  const dispatch = useAppDispatch();

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    dispatch(action(value));
  };
  return (
    <div className={styles.wrapper}>
      <p>
        {pageTitle} ({totalItems})
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
