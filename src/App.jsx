import React, { Suspense, useEffect, useState } from 'react';
import './App.scss';
import LoginPage from 'pages/login/LoginPage';
import Auth from 'services/Auth';
import LoadingPage from 'pages/loading/LoadingPage';

const Authenticated = React.lazy(() => import('pages/authenticated/AuthenticatedPage'));

const App = () => {

  const [ token, setToken ] = useState(Auth.getTokenFromStorage());
  const isAuthenticated = token !== Auth.emptyToken;

  const onTokenObtained = (token) => {
    Auth.putTokenToStorage(token);
    setToken(token);
  };

  const onLogout = () => onTokenObtained(Auth.emptyToken);

  useEffect(Auth.appendAxiosAuthorizationHeader(token), [ token ]);

  return (
    <Suspense fallback={ <LoadingPage /> }>
      {
        isAuthenticated ?
          <Authenticated onLogout={ onLogout } /> :
          <LoginPage onTokenObtained={ onTokenObtained } />
      }
    </Suspense>
  );
};


export default App;
