import PropTypes from 'prop-types';
import Category from 'models/Category';

const categoryPropType = PropTypes.instanceOf(Category).isRequired;

const categoriesPropType = PropTypes.arrayOf(categoryPropType).isRequired;

const withCategoriesPropTypes = {
  categories: categoriesPropType,
  categoriesErrorMessage: PropTypes.string.isRequired,
  categoriesInProgress: PropTypes.bool.isRequired,
  categoriesSuccess: PropTypes.bool,
  fetchCategories: PropTypes.func.isRequired,
};

export {
  categoryPropType,
  categoriesPropType,
  withCategoriesPropTypes,
};