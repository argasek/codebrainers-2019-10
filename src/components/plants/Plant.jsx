import React from "react";
import "./Plant.scss";
import find from 'lodash-es/find';
import * as moment from 'moment';

import {
  plantDifficultyOptions,
  plantExposureOptions,
  plantExposureUnknown,
  plantHumidityOptions,
  plantHumidityUnknown,
  plantTemperatureOptions,
} from "constants/PlantConstants";
import { categoriesPropTypes, plantPropTypes } from 'proptypes/CommonPropTypes';
import PlantExposureIcon from 'components/plants/icons/PlantExposureIcon';
import PlantHumidityIcon from 'components/plants/icons/PlantHumidityIcon';

// import moment from 'moment';

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

    const asYmd = (value) => moment.isMoment(value) ? value.format('YYYY-MM-DD') : '';
    const asAgo = (value) => moment.isMoment(value) ? value.fromNow() : '';

    /**
     * @type PlantExposure
     */
    const plantExposure = find(plantExposureOptions, { id: plant.requiredExposure }) || plantExposureUnknown;
    /**
     * @type PlantHumidity
     */
    const plantHumidity = find(plantHumidityOptions, { id: plant.requiredHumidity }) || plantHumidityUnknown;
    const plantCategory = this.findValueByKey(plantCategories, plant.category);
    const plantLastFertilized = asYmd(plant.lastFertilized);
    const plantLastWatered = asAgo(plant.lastWatered);

    return (
      <tr key={ plant.id }>
        <td>{ plant.name }</td>
        <td>{ plantCategory }</td>
        <td className="plant-attribute-icon text-center" title={ plantExposure.name }>
          <PlantExposureIcon plantExposure={ plantExposure } />
        </td>
        <td className="plant-attribute-icon-sm text-center">
          <PlantHumidityIcon plantHumidity={ plantHumidity } />
        </td>
        <td>{ this.findValueByKey(plantTemperatureOptions, plant.requiredTemperature) }</td>
        <td>{ plant.blooming.toString() }</td>
        <td>{ this.findValueByKey(plantDifficultyOptions, plant.difficulty) }</td>
        <td>{ plant.room }</td>
        <td>{ plantLastFertilized }</td>
        <td>{ plantLastWatered }</td>
      </tr>
    );
  }
}

Plant.propTypes = {
  plant: plantPropTypes,
  plantCategories: categoriesPropTypes,
};

export default Plant;

