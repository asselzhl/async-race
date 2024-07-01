import { WinnersTable } from '../components/WinnersTable/WinnersTable';
import { SortOptions } from '../components/SortOptions/SortOptions';
import { WinnersStatus } from '../components/WinnersStatus/WinnersStatus';
import { useWinners } from './helpers/useWinners';

export function Winners() {
  const {
    handleSortChange,
    currentWinners,
    totalWinners,
    totalPages,
    currentPage,
  } = useWinners();

  return (
    <>
      <SortOptions handleSortChange={handleSortChange} />

      <WinnersTable currentWinners={currentWinners} />

      <WinnersStatus
        totalWinners={totalWinners}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
}
