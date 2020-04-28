import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import CategoryItem from "components/categories/CategoryItem";
import InProgress from "components/shared/InProgress";
import { withCategoriesPropTypes } from 'proptypes/CategoriesPropTypes';
import OperationFailed from 'components/shared/OperationFailed';
import withCategories from 'components/categories/Categories';

class CategoriesContainer extends React.PureComponent {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const {
      categories,
      categoriesErrorMessage,
      categoriesInProgress,
      categoriesSuccess,
    } = this.props;

    return (
      <Card>
        <CardBody>
          <div className="app-container">
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
          </div>
        </CardBody>
      </Card>
    );
  }
}

CategoriesContainer.propTypes = {
  ...withCategoriesPropTypes
};

export default withCategories(CategoriesContainer);