import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fasIconPropType } from 'proptypes/CommonPropTypes';

const AuthenticatedNavbarItem = React.memo(({ exact, icon, name, path }) => {
  return (
    <NavItem>
      <NavLink tag={ RouterNavLink } to={ path } activeClassName="active" exact={ exact }>
        <FontAwesomeIcon icon={ icon } />
        { ' ' }
        { name }
      </NavLink>
    </NavItem>
  );
});

AuthenticatedNavbarItem.propTypes = {
  exact: PropTypes.bool,
  icon: fasIconPropType,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default AuthenticatedNavbarItem;