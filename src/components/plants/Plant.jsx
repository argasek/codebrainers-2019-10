import React from "react";
import "./Plant.scss";
import find from 'lodash-es/find';
import moment from 'moment-es6';
import {
  plantDifficultyOptions,
  plantExposureOptions,
  plantExposureUnknown,
  plantHumidityOptions,
  plantHumidityUnknown,
  plantTemperatureOptions,
} from "constants/PlantConstants";
import { plantPropTypes } from 'proptypes/PlantsPropTypes';
import { categoriesPropTypes } from 'proptypes/CategoriesPropTypes';
import PlantExposureIcon from 'components/plants/icons/PlantExposureIcon';
import PlantHumidityIcon from 'components/plants/icons/PlantHumidityIcon';
import { roomsPropTypes } from 'proptypes/RoomsPropTypes';
import PlantBloomingIcon from 'components/plants/icons/PlantBloomingIcon';

class Plant extends React.PureComponent {

  findValueByKey(options, valueToFind) {
    const id = options.findIndex((propValue) => propValue.id === valueToFind);
    return (id !== -1 ? options[id].name : '¯\\_(ツ)_/¯');
  }

  render() {
    const {
      plant,
      plantCategories,
      plantRooms,
    } = this.props;

    const asYmd = (value) => moment.isMoment(value) ? value.format('YYYY-MM-DD') : '';
    const asAgo = (value) => moment.isMoment(value) ? value.fromNow() : '';

    const plantCategory = this.findValueByKey(plantCategories, plant.category);
    const plantDifficulty = this.findValueByKey(plantDifficultyOptions, plant.difficulty);
    /**
     * @type PlantExposure
     */
    const plantExposure = find(plantExposureOptions, { id: plant.requiredExposure }) || plantExposureUnknown;
    /**
     * @type PlantHumidity
     */
    const plantHumidity = find(plantHumidityOptions, { id: plant.requiredHumidity }) || plantHumidityUnknown;
    const plantLastFertilized = asYmd(plant.lastFertilized);
    const plantLastWatered = asAgo(plant.lastWatered);
    const plantRoom = this.findValueByKey(plantRooms, plant.room);
    const plantTemperature = this.findValueByKey(plantTemperatureOptions, plant.requiredTemperature);

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
        <td>{ plantTemperature }</td>
        <td className="plant-attribute-icon text-center">
          <PlantBloomingIcon plantBlooming={ plant.blooming } />
        </td>
        <td>{ plantDifficulty }</td>
        <td>{ plantRoom }</td>
        <td>{ plantLastFertilized }</td>
        <td>{ plantLastWatered }</td>
      </tr>
    );
  }
}

Plant.propTypes = {
  plant: plantPropTypes,
  plantCategories: categoriesPropTypes,
  plantRooms: roomsPropTypes,
};

export default Plant;

