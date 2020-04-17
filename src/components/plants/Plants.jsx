import { Button, Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import Select from "components/shared/Select";
import { someArray, someOtherArray } from "constants/PlantConstants";
import React from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import Plant from "components/plants/Plant";
import InProgress from "components/shared/InProgress";

const PLANTS_FETCH_DELAY = 250;

class Plants extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      successPlants: undefined
    };
  }

  componentDidMount() {
    this.fetchPlants();
  }

  fetchPlants() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/plants/';

    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const plants = data.map((item) => item.name);
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
    const {
      fertilizingFrequency,
      inProgress,
      inputOnChange,
      plantName,
      someSelectField,
    } = this.props;

    const {
      plants,
      successPlants,
    } = this.state;

    return (
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
          <hr/>
          <InProgress inProgress={inProgress} />
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
        </CardBody>
      </Card>
    )
  }

}

Plants.propTypes = {
  fertilizingFrequency: PropTypes.string.isRequired,
  inProgress: PropTypes.bool.isRequired,
  inputOnChange: PropTypes.func.isRequired,
  plantName: PropTypes.string.isRequired,
  someSelectField: PropTypes.string.isRequired,
}


export default Plants;