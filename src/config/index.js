import app from './app';
import api from './api';
import locales from './locales';
import { routesApp, routesList } from './routes';

// Set Locale
const { ptBr } = locales;

export default {
  app,
  api,
  routesList,
  routesApp,
  lang: ptBr,
};
