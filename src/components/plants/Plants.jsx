import { Card, CardBody, Table } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Plant from "components/plants/Plant";
import InProgress from "components/shared/InProgress";

const PLANTS_FETCH_DELAY = 250;

class Plants extends React.PureComponent {
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
          const plants = data.map((item) => [
            {
              id: item.id,
              name: item.name,
              url: item.url,
              category: item.category,
              categorySlug: item.category_slug,
              wateringInterval: item.watering_interval,
              fertilizingInterval: item.fertilizing_interval,
              requiredExposure: item.required_exposure,
              requiredHumidity: item.required_humidity,
              requiredTemperature: item.required_temperature,
              blooming: item.blomming,
              difficulty: item.difficulty,
              wateringInterval: item.watering_interval,
              room: item.roms,
              lastWatered: item.last_watered,
              lastFertilized: item.last_fertilized,
            },
          ]);

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
          <InProgress inProgress={inProgress} />
          {successPlants === false && <p>Nie udało się pobrać Kwiatow</p>}
          {successPlants && (
            <Table hover>
              {/* {console.log(`Rendered plants `, plants)} */}
              <thead className="plants-table">
                <tr>
                  <th>name</th>
                  <th>category</th>
                  <th>Exposure</th>
                  <th>Humidity</th>
                  <th>Temperature</th>
                  <th>Blooming</th>
                  <th>Difficulty</th>
                  <th>Room</th>
                  <th>Last Fertilized </th>
                  <th>Last Watered</th>
                </tr>
              </thead>
              {/* <Plant {...this.props} /> */}
              {/* <tbody> */}
              {/* <div className="plants"> */}
              {/* <Plants /> */}
              {/* </div> */}
              {/* </tbody> */}
              <tbody>
                {plants.map((plant, index) => (
                  <tr key={plant[index]}>
                    <td>{plant[index].name}</td>
                    <td>{plant[index].category}</td>
                    <td>{plant[index].requiredExposure}</td>
                    <td>{plant[index].requiredHumidity}</td>
                    <td>{plant[index].requiredTemperature}</td>
                    <td>{plant[index].blooming}</td>
                    <td>{plant[index].difficulty}</td>
                    <td>{plant[index].room}</td>
                    <td>{plant[index].lastFertilized}</td>
                    <td>{plant[index].lastWatered}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            //oryginal
            // {plants.map((plant, index, arr) => (
            //   <Plant key={index} id={plant[0]} name={plant[1]} url={plant[2]} />
            // ))}
          )}
        </CardBody>
      </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
