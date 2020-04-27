import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AuthenticatedNavbarItem = ({ icon, name, path }) => {
  return (
    <NavItem>
      <NavLink tag={ RouterNavLink } exact to={ path } activeClassName="active">
        <FontAwesomeIcon icon={ icon } />
        { ' ' }
        { name }
      </NavLink>
    </NavItem>
  );
};

AuthenticatedNavbarItem.propTypes = {
  icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default AuthenticatedNavbarItem;