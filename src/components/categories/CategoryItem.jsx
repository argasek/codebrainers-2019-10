import React from 'react';
import PropTypes from 'prop-types';
import './CategoryItem.scss';
import { ListGroupItem } from 'reactstrap';
import { categoryPropType } from 'proptypes/CommonPropTypes';

class CategoryItem extends React.PureComponent {

  render() {
    const category = this.props.category;

    return (
      <ListGroupItem>
        { category.name }
      </ListGroupItem>
    );
  }

}

CategoryItem.propTypes = {
  category: categoryPropType,
};


export default CategoryItem;