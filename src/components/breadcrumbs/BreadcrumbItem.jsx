import React from 'react';
import { BreadcrumbItem as Item } from 'reactstrap';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

const BreadcrumbItem = ({ active, children, url }) => {
  return (
    <Item active={ active }>
      { active && children }
      { !active && <Link to={ url }>{ children }</Link> }
    </Item>
  );
};

BreadcrumbItem.propTypes = {};

export default compose(
  React.memo,
)(BreadcrumbItem);

