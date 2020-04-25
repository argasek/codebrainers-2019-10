import React from "react";
import PropTypes from "prop-types";
import "./Plant.scss";

import {
  plantDifficultyOptions,
  plantExposureOptions,
  plantHumidityOptions,
  plantTemperatureOptions,
} from "constants/PlantConstants";


class Plant extends React.PureComponent {

  findValueByKey(tableView, valueToFind) {
    const id = tableView.findIndex((propValue) => propValue.id === valueToFind);
    return tableView[id].name;
  }

  render() {
    const plant = this.props.plant;
    const plantRequiredExposure = this.findValueByKey(plantExposureOptions, plant.requiredExposure);

    return (
      <tr key={ plant.id }>
        <td>{ plant.name }</td>
        <td>{ plant.category }</td>
        <td>{ plantRequiredExposure }</td>
        <td>{ this.findValueByKey(plantHumidityOptions, plant.requiredHumidity) }</td>
        <td>{ this.findValueByKey(plantTemperatureOptions, plant.requiredTemperature) }</td>
        <td>{ plant.blooming }</td>
        <td>{ this.findValueByKey(plantDifficultyOptions, plant.difficulty) }</td>
        <td>{ plant.room }</td>
        <td>{ plant.lastFertilized }</td>
        <td>{ plant.lastWatered.substr(0, 10) }</td>
      </tr>
    );
  }
}

Plant.propTypes = {
  plant: PropTypes.object.isRequired,
};

export default Plant;

