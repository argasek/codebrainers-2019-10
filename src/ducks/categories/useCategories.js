import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  selectCategories,
  selectCategoriesErrorMessage,
  selectCategoriesInProgress,
  selectCategoriesSuccess
} from 'ducks/categories/categoriesSlice';

const useCategories = () => {
  const dispatch = useDispatch();

  return {
    categories: useSelector(selectCategories),
    categoriesErrorMessage: useSelector(selectCategoriesErrorMessage),
    categoriesInProgress: useSelector(selectCategoriesInProgress),
    categoriesSuccess: useSelector(selectCategoriesSuccess),
    fetchCategories: () => dispatch(fetchCategories())
  };

};

export default useCategories;