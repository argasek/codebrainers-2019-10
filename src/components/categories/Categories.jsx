import React from 'react';
import useCategories from 'ducks/categories/useCategories';

const withCategories = (WrappedComponent) => {

  return (props) => {
    const categories = useCategories();

    return (
      <WrappedComponent
        { ...props }
        { ...categories }
      />
    );
  };
};

export default withCategories;