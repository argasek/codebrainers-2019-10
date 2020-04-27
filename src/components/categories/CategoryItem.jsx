import React from 'react';
import PropTypes from 'prop-types';
import './CategoryItem.scss';
import { ListGroupItem } from 'reactstrap';
import { categoryPropType } from 'proptypes/CommonPropTypes';

class CategoryItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      className: 'category-item'
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.updateClassNameWhenIndexChanged(prevState);
  }

  updateClassNameWhenIndexChanged(prevState) {
    const index = this.state.index;

    if (prevState.index !== index) {
      console.log(`Index changed from ${ prevState.index } to ${ index }`);
      let className = `category-item active-${ index }`;
      this.setState({ className });
    }
  }

  render() {
    const category = this.props.category;
    const className = this.state.className;

    const onClick = () => {
      if (this.props.isLastItem === true) {
        let index = this.state.index;
        index = ++index === 4 ? 0 : index;
        this.setState({ index });
      }
    };

    return (
      <ListGroupItem className={ className } onClick={ onClick }>
        { category.name }
      </ListGroupItem>
    );
  }

}

CategoryItem.propTypes = {
  category: categoryPropType,
  isLastItem: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
};


export default CategoryItem;