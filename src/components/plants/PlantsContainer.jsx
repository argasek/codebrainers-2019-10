import { Card, CardBody } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import InProgress from "components/shared/InProgress";
import Plants from "components/plants/Plants";
import { PLANTS_FETCH_DELAY } from "constants/DebugConstants";

class PlantsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      successPlants: undefined,
      inProgress: false,
    };
  }

  componentDidMount() {
    this.props.fetchCategories()
      .then(() => this.fetchPlants());
  }

  fetchPlants() {
    console.log('Method PlantsContainer.fetchPlants() fired');
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({ inProgress: true });
    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      axios
        .get(requestUrl)
        .then((response) => {
          const data = response.data;
          const plants = data.map((item) => (
            {
              id: item.id,
              name: item.name,
              url: item.url,
              category: item.category,
              categorySlug: item.category_slug,
              fertilizingInterval: item.fertilizing_interval,
              requiredExposure: item.required_exposure,
              requiredHumidity: item.required_humidity,
              requiredTemperature: item.required_temperature,
              blooming: item.blomming,
              difficulty: item.difficulty.toString(),
              wateringInterval: item.watering_interval,
              room: item.roms,
              lastWatered: item.last_watered,
              lastFertilized: item.last_fertilized,
            }
          ));

          const successPlants = true;
          this.setState({ plants, successPlants });
          console.log('Fetched plants');
          resolve();
        })
        .catch((error) => {
          this.setState({ successPlants: false });
          reject();
        })
        .finally(() => {
          this.setState({ inProgress: false });
        })
    });
  }

  render() {
    const {
      plants,
      successPlants,
      inProgress
    } = this.state;

    const {
      categories
    } = this.props;

    const totalPlants = 0;

    return (
      <Card className="mb-4">
        <CardBody>
          <h3>List of plants</h3>
          <p>You have {totalPlants} in all your rooms.</p>
          <InProgress inProgress={ inProgress }/>
          { successPlants === false && <p>Failed to fetch plants :-(</p> }
          { successPlants && (
            <Plants
              plants={ plants }
              categories={ categories }
            />
          ) }
        </CardBody>
      </Card>
    );
  }
}

PlantsContainer.propTypes = {
  delayFetch: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default PlantsContainer;
