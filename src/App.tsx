import { Route, Routes } from 'react-router-dom';
import { Garage } from './pages/Garage';
import { Winners } from './pages/Winners';
import { routePaths } from './helpers/routePaths';

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
    <Routes>
      {routesConfig.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
}

export default App;
