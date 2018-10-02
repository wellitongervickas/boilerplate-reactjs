const api = {
  development: 'http://localhost:8080',
  production: 'http://localhost:8080',
};

const define = env => {
  switch (env) {
    case 'development':
      return api.development

    case 'production':
      return api.production

    default:
      return api.production
  }
};

export default {
  environment: process.env.REACT_APP_STAGE,
  url: define(process.env.REACT_APP_STAGE),
};
