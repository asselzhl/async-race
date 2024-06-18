import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Garage from './pages/Garage';
import Winners from './pages/Winners';
import routePaths from './helpers/routePaths';
import Header from './components/Header/Header';

function App() {
  // TODO: routesConfig type
  const routesConfig = [
    {
      path: routePaths.index,
      element: <Garage />,
    },
    {
      path: routePaths.winners,
      element: <Winners />,
    },
  ];

  return (
    <Container>
      <Header />
      <Routes>
        {routesConfig.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </Container>
  );
}

export default App;
