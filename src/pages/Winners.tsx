import { WinnersTable } from '../components/WinnersTable/WinnersTable';
import { SortOptions } from '../components/SortOptions/SortOptions';
import { useWinnersList } from './helpers/useWinnersList';
import { PageStatus } from '../components/PageStatus/PageStatus';
import { setWinnersCurrentPage } from '../store/pages/pagesSlice';

export function Winners() {
  const {
    handleSortChange,
    currentWinners,
    totalWinners,
    totalPages,
    currentPage,
  } = useWinnersList();

  return (
    <>
      <SortOptions handleSortChange={handleSortChange} />

      <WinnersTable currentWinners={currentWinners} />

      <PageStatus
        totalItems={totalWinners}
        totalPages={totalPages}
        currentPage={currentPage}
        action={setWinnersCurrentPage}
        pageTitle="Winners"
      />
    </>
  );
}
