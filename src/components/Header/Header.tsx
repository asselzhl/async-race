import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import routePaths from '../../helpers/routePaths';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      {/* TODO: wrap link or button */}
      <Link to={routePaths.index}>
        <Button variant="outlined">Garage</Button>
      </Link>
      <Link to={routePaths.winners}>
        <Button variant="outlined">Winners</Button>
      </Link>
    </header>
  );
}

export default Header;
