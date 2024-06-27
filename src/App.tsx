import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Garage } from './pages/Garage/Garage';
import { Winners } from './pages/Winners/Winners';
import { routePaths } from './pages/helpers/routePaths';
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
