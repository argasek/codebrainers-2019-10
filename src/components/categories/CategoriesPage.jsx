import CategoryItem from 'components/categories/CategoryItem';
import InProgress from 'components/shared/InProgress';
import OperationFailed from 'components/shared/OperationFailed';
import React, { useEffect } from 'react';
import useCategories from 'ducks/categories/useCategories';
import { Card, CardBody, ListGroup } from 'reactstrap';
import TopHeaderWithActionButton from 'components/shared/TopHeaderWithActionButton';

const CategoriesPage = () => {

  const {
    categories,
    categoriesErrorMessage,
    categoriesInProgress,
    categoriesSuccess,
    fetchCategories,
  } = useCategories();

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <CardBody>
        <TopHeaderWithActionButton title="Categories">
        </TopHeaderWithActionButton>

        <InProgress inProgress={ categoriesInProgress } />
        <OperationFailed isFailed={ categoriesSuccess === false }>
          <strong>Failed to fetch categories.</strong>
          { ' Reason: ' }
          { categoriesErrorMessage }
        </OperationFailed>
        {
          categoriesSuccess &&
          <ListGroup className="categories">
            {
              categories.map((category) =>
                <CategoryItem
                  category={ category }
                  key={ category.id }
                />
              )
            }
          </ListGroup>
        }
      </CardBody>
    </Card>
  );
};

CategoriesPage.propTypes = {};

export default CategoriesPage;