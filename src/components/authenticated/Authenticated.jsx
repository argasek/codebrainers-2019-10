import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedNavbar from "./AuthenticatedNavbar";
import AuthenticatedContainer from "./AuthenticatedContainer";
import AuthenticatedFooter from './AuthenticatedFooter';
import PropTypes from 'prop-types';

const Authenticated = ({ onLogout }) => (
  <Router>
    <AuthenticatedNavbar onLogout={ onLogout } />
    <AuthenticatedContainer />
    <AuthenticatedFooter />
  </Router>
);

Authenticated.propTypes = {
  onLogout: PropTypes.func.isRequired,
};


export default Authenticated;
