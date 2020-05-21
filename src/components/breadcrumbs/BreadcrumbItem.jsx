import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem as Item } from 'reactstrap';
import compose from 'compose-function';

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

