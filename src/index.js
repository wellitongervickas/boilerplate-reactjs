import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';

// Style Files
import 'normalize.css'; // https://github.com/necolas/normalize.css
import 'animate.css'; // https://daneden.github.io/animate.css/
import './assets/styles/app.css';

// Redux
import { Provider } from 'react-redux';
import { history, store } from './store';
import { ConnectedRouter } from 'react-router-redux';

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App/>
    </ConnectedRouter>
  </Provider>
,document.getElementById('root'));

serviceWorker.unregister();
