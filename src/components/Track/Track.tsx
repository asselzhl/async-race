import { Car } from '../Car/Car';

import { PageStatus } from '../PageStatus/PageStatus';
import { setGarageCurrentPage } from '../../store/pages/pagesSlice';

import styles from './Track.module.css';

import { useCarsData } from './useCarsData';

export function Track() {
  const { currentCars, totalCars, totalPages, currentPage } = useCarsData();

  return (
    <>
      <ul className={styles.list}>
        {currentCars.map((car) => {
          return <Car key={car.id} car={car} />;
        })}
      </ul>

      <PageStatus
        totalItems={totalCars}
        totalPages={totalPages}
        currentPage={currentPage}
        action={setGarageCurrentPage}
        pageTitle="Garage"
      />
    </>
  );
}
