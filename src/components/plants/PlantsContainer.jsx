import { Card, CardBody } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import InProgress from "components/shared/InProgress";
import Plants from "components/plants/Plants";
import { delay, PLANTS_FETCH_DELAY } from "shared/Debug";

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
      .then(() => this.fetchPlantsDelayed());
  }

  fetchPlants = (resolve, reject) => {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({ inProgress: true });
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
      });
  };

  fetchPlantsDelayed() {
    console.log('Method PlantsContainer.fetchPlantsDelayed() fired');
    return delay(PLANTS_FETCH_DELAY, this.fetchPlants);
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
          <p>You have { totalPlants } in all your rooms.</p>
          <InProgress inProgress={ inProgress } />
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
  fetchCategories: PropTypes.func.isRequired,
};

export default PlantsContainer;
