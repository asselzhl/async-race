import { Modal } from '@mui/material';
import { ControlPanel } from '../components/ControlPanel/ControlPanel';
import { Track } from '../components/Track/Track';

import styles from './Garage.module.css';

import { useGarageList } from './helpers/useGarageList';

export function Garage() {
  const { showWinner, winnerCarName, winner, handleWinnerModalClose } =
    useGarageList();
  return (
    <>
      <ControlPanel />
      <Track />
      <Modal open={showWinner} onClose={handleWinnerModalClose}>
        <div className={styles.modal}>
          <h5>Winner:</h5>
          <p>Car: {winnerCarName}</p>
          <p>Time: {winner.time} </p>
        </div>
      </Modal>
    </>
  );
}
