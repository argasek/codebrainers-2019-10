import React from 'react';
import './CategoryItem.scss';
import { ListGroupItem } from 'reactstrap';
import { categoryPropType } from 'proptypes/CategoriesPropTypes';

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