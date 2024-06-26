import { WinnersTable } from '../../components/WinnersTable/WinnersTable';
import { SortOptions } from '../../components/SortOptions/SortOptions';
import { useWinnersList } from './useWinnersList';
import { PageStatus } from '../../components/PageStatus/PageStatus';
import { setWinnersCurrentPage } from '../../store/pages/pagesSlice';

export function Winners() {
  const {
    handleSortParamsChange,
    currentWinners,
    totalWinners,
    totalPages,
    currentPage,
  } = useWinnersList();

  return (
    <>
      <h1>Winners</h1>
      <SortOptions handleSortParamsChange={handleSortParamsChange} />

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
