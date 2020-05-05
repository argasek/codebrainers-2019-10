import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Api from 'constants/Api';
import 'components/authentication/login/LoginPageContainer.scss';
import LoadingPage from 'pages/loading/LoadingPage';
import LoginPageContainer from 'components/authentication/login/LoginPageContainer';

const LoginPage = ({ onTokenObtained }) => {
  const isDestroyed = useRef(false);
  const [ loginInProgress, setLoginInProgress ] = useState(false);

  /**
   * @param {Credentials} credentials
   * @return
   */
  const onSignIn = (credentials) => {
    setLoginInProgress(true);

    axios.post(Api.AUTH_TOKEN, credentials)
      .then(onSignInSuccess)
      .catch(onSignInError)
      .finally(onSignInFinally);
  };

  const onSignInError = (error) => {
    // TODO: some decent error handling
    console.warn('TODO: Handle Sign In API errors');
  };

  const onSignInFinally = () => {
    if (isDestroyed.current === false) {
      setLoginInProgress(false);
    }
  };

  const onSignInSuccess = (response) => {
    const { token } = response.data;
    onTokenObtained(token);
  };

  useEffect(() => {
    isDestroyed.current = false;
    return () => {
      isDestroyed.current = true;
    };
  });

  return loginInProgress ? <LoadingPage /> : <LoginPageContainer onSubmit={ onSignIn } />;
};

LoginPage.propTypes = {
  onTokenObtained: PropTypes.func.isRequired,
};


export default LoginPage;