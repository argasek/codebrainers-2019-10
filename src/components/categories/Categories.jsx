import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import Plant from "components/plants/Plant";
import CategoryItem from "components/categories/CategoryItem";

const Categories = ({
                      inProgress,
                      successCategories,
                      successPlants,
                      plants,
                      categories,
                }) => {

  return (
    <Card>
      <CardBody>
        <div className="app-container">
          {
            inProgress && <p>Loading data...</p>
          }
          {
            successCategories === false &&
            <p>Nie udało się pobrać Kategorii</p>
          }
          {
            successPlants === false &&
            <p>Nie udało się pobrać Kwiatow</p>
          }
          {
            successPlants &&
            <div className="plants">
              {
                plants.map((plant, index, arr) =>
                  <Plant
                    name={plant}
                    key={index}
                  />
                )
              }
            </div>
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
};


export default Categories;