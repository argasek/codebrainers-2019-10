import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlantasticNavItem = ({ path, icon, name }) => {
  return (
    <NavItem>
      <NavLink tag={RouterNavLink} exact to={path} activeClassName="active">
        <FontAwesomeIcon icon={icon} />
        {' '}
        {name}
      </NavLink>
    </NavItem>
  )
};
export default PlantasticNavItem;