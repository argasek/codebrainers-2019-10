import React from "react";
import {Button, Card, CardBody, Col, Container, FormGroup, Input, Label, ListGroup, Row} from "reactstrap";
import { Route, Switch } from "react-router-dom";
import {ROUTE_CATEGORIES, ROUTE_PLANTS, ROUTE_ROOMS} from "constants/Routes";
import Select from "components/shared/Select";
import Plant from "components/plants/Plant";
import CategoryItem from "components/categories/CategoryItem";
import {someArray, someOtherArray} from "constants/PlantConstants";

class PlantasticContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {
      categories,
      fertilizingFrequency,
      inProgress,
      inputOnChange,
      plantName,
      plants,
      someSelectField,
      successCategories,
      successPlants,
    } = this.props;

    return (
      <Container>
        <Switch>
          <Route exact path={ROUTE_PLANTS}>
            <Card className="mb-4">
              <CardBody>
                <form method="GET">
                  <Row>
                    <Col xs={6} lg={3}>
                      <Select name="someSelectField" value={someSelectField} onChange={inputOnChange} options={someArray} label="Jakieś pole" />
                    </Col>
                    <Col xs={6} lg={5}>
                      <Select name="fertilizingFrequency" value={fertilizingFrequency} onChange={inputOnChange} options={someOtherArray} label="Fertilizing frequency" />
                    </Col>
                    <Col xs={12} lg={4}>
                      <FormGroup>
                        <Label for="plantName">Plant name:</Label>
                        <Input
                          id="plantName"
                          name="plantName"
                          type="text"
                          value={plantName}
                          onChange={inputOnChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Button type="submit" className="mt-3">Wyślij formularz</Button>
                </form>
              </CardBody>
            </Card>
          </Route>
          <Route path={ROUTE_CATEGORIES}>
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
          </Route>
          <Route path={ROUTE_ROOMS}>
            Rooms
          </Route>
        </Switch>
      </Container>
    )
  }
}

export default PlantasticContainer;
