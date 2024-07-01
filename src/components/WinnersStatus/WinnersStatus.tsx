import { Pagination } from '@mui/material';
import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../store/store';
import { setWinnersCurrentPage } from '../../store/pages/pagesSlice';

interface WinnersStatusProps {
  totalWinners: number;
  totalPages: number;
  currentPage: number;
}

export function WinnersStatus({
  totalWinners,
  totalPages,
  currentPage,
}: WinnersStatusProps) {
  const dispatch = useAppDispatch();

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    dispatch(setWinnersCurrentPage(value));
  };
  return (
    <div>
      <p>Winners ({totalWinners})</p>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
      />
    </div>
  );
}
