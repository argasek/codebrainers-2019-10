import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedNavbar from "components/authenticated/AuthenticatedNavbar";
import AuthenticatedContainer from "components/authenticated/AuthenticatedContainer";
import AuthenticatedFooter from 'components/authenticated/AuthenticatedFooter';
import PropTypes from 'prop-types';

const AuthenticatedPage = ({ onLogout }) => (
  <Router>
    <AuthenticatedNavbar onLogout={ onLogout } />
    <AuthenticatedContainer />
    <AuthenticatedFooter />
  </Router>
);

AuthenticatedPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
};


export default AuthenticatedPage;
