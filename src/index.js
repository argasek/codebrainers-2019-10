import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/proposals/reflect-metadata';
import 'bootstrap-pre-custom.sass';
import 'bootstrap-post-custom.sass';
import './index.scss';
import App from 'App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import Api from 'constants/Api';

axios.defaults.baseURL = Api.baseUrl;
axios.defaults.timeout = 2000;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
