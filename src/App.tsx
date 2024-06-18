import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Garage } from './pages/Garage';
import { Winners } from './pages/Winners';
import { routePaths } from './helpers/routePaths';
import { Header } from './components/Header/Header';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path={routePaths.index} element={<Garage />} />
        <Route path={routePaths.winners} element={<Winners />} />
      </Routes>
    </Container>
  );
}

export default App;
