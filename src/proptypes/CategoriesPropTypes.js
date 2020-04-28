import PropTypes from 'prop-types';

const categoryPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

const categoriesPropTypes = PropTypes.arrayOf(categoryPropType).isRequired;

const withCategoriesPropTypes = {
  categories: categoriesPropTypes,
  categoriesErrorMessage: PropTypes.string.isRequired,
  categoriesInProgress: PropTypes.bool.isRequired,
  categoriesSuccess: PropTypes.bool,
  fetchCategories: PropTypes.func.isRequired,
};

export {
  categoryPropType,
  categoriesPropTypes,
  withCategoriesPropTypes,
};