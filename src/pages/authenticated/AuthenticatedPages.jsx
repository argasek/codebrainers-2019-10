import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedNavbar from 'components/authenticated/AuthenticatedNavbar';
import AuthenticatedContainer from 'components/authenticated/AuthenticatedContainer';
import AuthenticatedFooter from 'components/authenticated/AuthenticatedFooter';
import PropTypes from 'prop-types';
import { ToastProvider } from 'react-toast-notifications';
import { Notifications } from 'services/Notifications';

const AuthenticatedPages = ({ onLogout }) => (
  <Router>
    <ToastProvider autoDismiss={ Notifications.toastAutoDismiss }>
      <AuthenticatedNavbar onLogout={ onLogout } />
      <AuthenticatedContainer />
      <AuthenticatedFooter />
    </ToastProvider>
  </Router>
);

AuthenticatedPages.propTypes = {
  onLogout: PropTypes.func.isRequired,
};


export default AuthenticatedPages;
