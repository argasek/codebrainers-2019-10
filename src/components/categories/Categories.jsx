import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import CategoryItem from "components/categories/CategoryItem";
import InProgress from "components/shared/InProgress";
import axios from 'axios';

const CATEGORIES_FETCH_DELAY = 500;

class Categories extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      inProgress: false,
      successCategories: undefined,
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories()
      .finally(() => {
        this.setState({ inProgress: false });
      })
  }

  fetchCategories() {

    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
    this.setState({ inProgress: true });
    return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const categories = data.map((item) => item.name);
          const successCategories = true;
          this.setState({ categories, successCategories });
          resolve();
        })
        .catch((error) => {
          this.setState({ successCategories: false });
          reject();
        })
        .finally(() => {
          console.log('Resolved');
        });
    });
  }

  render() {
    const {
      inProgress,
      successCategories,
      categories,
    } = this.state;




    return (
      <Card>
        <CardBody>
          <div className="app-container">
            <InProgress inProgress={inProgress} />
            {
              successCategories === false &&
              <p>Nie udało się pobrać Kategorii</p>
            }
            {
              successCategories &&
              <ListGroup className="categories">
                {
                  categories.map((item, index, arr) =>
                    <CategoryItem
                      category={item}
                      label='category'
                      key={index}
                      isLastItem={arr.length - 1 === index}
                      index={index}
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
};


export default Categories;