import Welcome from '../app/views/welcome';
import NotFound from '../app/views/not-found';

const routesList = {
  welcome: '/',
  notFound: '/not-found',
};

const routesApp = {
  welcome: {
    path: routesList.welcome,
    exact: true,
    main: Welcome,
  },
  notFound: {
    path: routesList.notFound,
    exact: true,
    main: NotFound,
  },
  otherwise: {
    path: '*',
    exact: false,
    main: NotFound,
  },
};

export { routesApp, routesList };
