import { Card, CardBody } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import InProgress from "components/shared/InProgress";
import Plants from "components/plants/Plants";

const PLANTS_FETCH_DELAY = 250;

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
    this.fetchPlants().finally(() => {
      this.setState({ inProgress: false });
    });
  }

  fetchPlants() {
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
          resolve();
        })
        .catch((error) => {
          this.setState({ successPlants: false });
          reject();
        });
    });
  }

  render() {
    const { plants, successPlants, inProgress } = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={ inProgress }/>
          { successPlants === false && <p>Nie udało się pobrać Kwiatow</p> }
          { successPlants && (
            <Plants plants={plants} />
          ) }
        </CardBody>
      </Card>
    );
  }
}

PlantsContainer.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default PlantsContainer;
