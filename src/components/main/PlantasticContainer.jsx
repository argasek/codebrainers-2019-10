import React from "react";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import { ROUTE_CATEGORIES, ROUTE_PLANTS, ROUTE_ROOMS } from "constants/Routes";
import Plants from "components/plants/Plants";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";

class PlantasticContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
    }
  }

  render() {
    const {
      delayFetch,
      categories,
      fertilizingFrequency,
      inProgress,
      inputOnChange,
      plantName,
      someSelectField,
      successCategories,
    } = this.props;

    return (
      <Container>
        <Switch>
          <Route exact path={ROUTE_PLANTS}>
            <Plants
              delayFetch={delayFetch}
              inProgress={inProgress}
              fertilizingFrequency={fertilizingFrequency}
              inputOnChange={inputOnChange}
              plantName={plantName}
              someSelectField={someSelectField}
            />
          </Route>
          <Route path={ROUTE_CATEGORIES}>
            <Categories
              inProgress={inProgress}
              successCategories={successCategories}
              categories={categories}
            />
          </Route>
          <Route path={ROUTE_ROOMS}>
            <Rooms />
          </Route>
        </Switch>
      </Container>
    )
  }
}

export default PlantasticContainer;
