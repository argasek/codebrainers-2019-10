import React, { useEffect, useState } from 'react';
import './App.scss';
import Authenticated from 'components/authenticated/Authenticated';
import LoginPage from 'components/authentication/LoginPage';
import Auth from 'constants/Auth';
import axios from 'axios';

const App = () => {

  const [ token, setToken ] = useState(Auth.getTokenFromStorage());
  const isAuthenticated = token !== '';

  const appendAxiosAuthorizationHeader = () => {
    if (isAuthenticated) {
      const value = Auth.getHeaderValueFromToken(token);
      axios.defaults.headers.common[Auth.httpHeader] = value;
    } else {
      delete axios.defaults.headers.common[Auth.httpHeader];
    }
  };

  const onTokenObtained = (token) => {
    Auth.putTokenToStorage(token);
    setToken(token);
  };

  const onLogout = () => onTokenObtained('');

  useEffect(appendAxiosAuthorizationHeader, [ token, isAuthenticated ]);

  return isAuthenticated ?
    <Authenticated onLogout={ onLogout } /> :
    <LoginPage onTokenObtained={ onTokenObtained } />
    ;

};


export default App;
