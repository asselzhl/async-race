type RoutePaths = '/' | '/garage' | '/winners';

interface RoutePathsKeys {
  index: RoutePaths;
  winners: RoutePaths;
}

const routePaths: RoutePathsKeys = {
  index: '/',
  winners: '/winners',
};

export default routePaths;
