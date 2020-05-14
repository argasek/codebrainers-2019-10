import Plant from 'models/Plant';
import pick from 'lodash-es/pick';
import moment from 'moment';
import {
  plantDifficultyOptions,
  plantExposureOptions,
  plantHumidityOptions,
  plantTemperatureOptions
} from 'constants/PlantConstants';

class PlantFormFields {
  static ID = 'id';
  static BLOOMING = 'blooming';
  static CATEGORY = 'category';
  static DIFFICULTY = 'difficulty';
  static FERTILIZING_INTERVAL = 'fertilizingInterval';
  static LAST_FERTILIZED = 'lastFertilized';
  static LAST_WATERED = 'lastWatered';
  static NAME = 'name';
  static REQUIRED_EXPOSURE = 'requiredExposure';
  static REQUIRED_HUMIDITY = 'requiredHumidity';
  static REQUIRED_TEMPERATURE = 'requiredTemperature';
  static ROOM = 'room';
  static WATERING_INTERVAL = 'wateringInterval';

  /**
   *
   * @param {Plant} plant
   * @return {*}
   */
  static getInitialValues(plant) {
    const firstOf = (arr) => arr[0].id;

    const fieldNames = Object.values(PlantFormFields);
    const initialValues = pick(plant, fieldNames);

    return plant.id ? initialValues : Object.assign(initialValues, {
      [PlantFormFields.LAST_FERTILIZED]: moment(),
      [PlantFormFields.LAST_WATERED]: moment(),
      [PlantFormFields.REQUIRED_EXPOSURE]: firstOf(plantExposureOptions),
      [PlantFormFields.REQUIRED_HUMIDITY]: firstOf(plantHumidityOptions),
      [PlantFormFields.DIFFICULTY]: firstOf(plantDifficultyOptions),
      [PlantFormFields.REQUIRED_TEMPERATURE]: firstOf(plantTemperatureOptions),
    });
  }

  /**
   *
   * @param {Object} values
   * @returns {Plant}
   */
  static toModel(values) {
    const plant = new Plant();
    return Object.assign(plant, values);
  }
}

export default PlantFormFields;