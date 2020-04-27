import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import CategoryItem from "components/categories/CategoryItem";
import InProgress from "components/shared/InProgress";
import PropTypes from "prop-types";
import { categoriesPropTypes } from 'proptypes/CommonPropTypes';

class Categories extends React.PureComponent {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const {
      categoriesInProgress,
      categoriesSuccess,
      categories,
    } = this.props;

    return (
      <Card>
        <CardBody>
          <div className="app-container">
            <InProgress inProgress={ categoriesInProgress } />
            {
              categoriesSuccess === false &&
              <p>Failed to fetch plants' categories</p>
            }
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
  categoriesInProgress: PropTypes.bool.isRequired,
  categoriesSuccess: PropTypes.bool,
  fetchCategories: PropTypes.func.isRequired,
};


export default Categories;