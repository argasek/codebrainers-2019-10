import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import CategoryItem from "components/categories/CategoryItem";
import InProgress from "components/shared/InProgress";
import PropTypes from "prop-types";

/**
 * TODO: refactor this component as a function component
 */
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
            <InProgress inProgress={ categoriesInProgress }/>
            {
              categoriesSuccess === false &&
              <p>Failed to fetch plants' categories</p>
            }
            {
              categoriesSuccess &&
              <ListGroup className="categories">
                {
                  categories.map((item, index, arr) =>
                    <CategoryItem
                      category={ item }
                      label='category'
                      key={ index }
                      isLastItem={ arr.length - 1 === index }
                      index={ index }
                    />
                  )
                }
              </ListGroup>
            }
          </div>
        </CardBody>
      </Card>
    )
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoriesInProgress: PropTypes.bool.isRequired,
  categoriesSuccess: PropTypes.bool,
  fetchCategories: PropTypes.func.isRequired
}


export default Categories;