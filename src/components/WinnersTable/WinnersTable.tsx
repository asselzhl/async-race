import { FaCarSide } from 'react-icons/fa6';

import styles from './WinnersTable.module.css';

interface WinnersItem {
  id: number;
  color: string;
  name: string;
  wins: number;
  time: number;
}

interface WinnersTableProps {
  currentWinners: WinnersItem[];
}

export function WinnersTable({ currentWinners }: WinnersTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Car</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Best time (seconds)</th>
        </tr>
      </thead>
      <tbody>
        {currentWinners.map((winner) => {
          return (
            <tr key={winner.id}>
              <td>{winner.id}</td>
              <td aria-label={winner.color}>
                <FaCarSide color={winner.color} size={50} />
              </td>
              <td>{winner.name}</td>
              <td>{winner.wins}</td>
              <td>{winner.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
