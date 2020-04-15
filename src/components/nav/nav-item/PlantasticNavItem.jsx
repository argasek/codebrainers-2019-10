import React from 'react';
import { NavLink as RouterNavLink, } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PlantasticNavItem = props => {
    return (
        <NavItem>
            <NavLink tag={RouterNavLink} exact to="/" activeClassName="active">
                <FontAwesomeIcon icon={faSeedling} />
                {' '}
                Plants
            </NavLink>
        </NavItem>
    )
};

export default PlantasticNavItem;