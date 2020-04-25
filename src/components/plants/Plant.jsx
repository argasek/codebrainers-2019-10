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

  findValueByKey(options, valueToFind) {
    const id = options.findIndex((propValue) => propValue.id === valueToFind);
    return (id !== -1 ? options[id].name : 'UNKNOWN');
  }

  render() {
    const {
      plant,
      plantCategories,
    } = this.props;

    const plantRequiredExposure = this.findValueByKey(plantExposureOptions, plant.requiredExposure);
    const plantCategory = this.findValueByKey(plantCategories, plant.category);

    return (
      <tr key={ plant.id }>
        <td>{ plant.name }</td>
        <td>{ plantCategory }</td>
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
  plantCategories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

export default Plant;

