import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/proposals/reflect-metadata';
import 'styles/bootstrap-pre-custom.sass';
import 'styles/bootstrap-post-custom.sass';
import 'react-datepicker/src/stylesheets/datepicker.scss';
import 'styles/customize-datepicker.scss';
import './index.scss';
import App from 'app/App';
import store from 'ducks/store';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { Api } from 'services/Api';
import { Provider } from 'react-redux';

axios.defaults.baseURL = Api.baseUrl;
axios.defaults.timeout = Api.timeout;

const renderTarget = document.getElementById('root');

const application = (
  <Provider store={ store }>
    <App />
  </Provider>
);

ReactDOM.render(application, renderTarget);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
