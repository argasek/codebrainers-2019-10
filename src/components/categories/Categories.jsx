import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import CategoryItem from "components/categories/CategoryItem";
import InProgress from "components/shared/InProgress";
import PropTypes from "prop-types";
import { categoriesPropTypes } from 'proptypes/CommonPropTypes';
import OperationFailed from 'components/shared/OperationFailed';

class Categories extends React.PureComponent {

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

Categories.propTypes = {
  categories: categoriesPropTypes,
  categoriesErrorMessage: PropTypes.string.isRequired,
  categoriesInProgress: PropTypes.bool.isRequired,
  categoriesSuccess: PropTypes.bool,
  fetchCategories: PropTypes.func.isRequired,
};


export default Categories;