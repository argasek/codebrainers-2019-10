import Plant from 'models/Plant';
import pick from 'lodash-es/pick';
import moment from 'moment-es6';
import { plantDifficultyOptions } from 'constants/PlantConstants';
import { FormikApiErrors } from 'components/shared/form/FormikApiErrors';
import { DATE_FORMAT } from 'constants/Config';

/**
 * @todo Refactoring required. We require almost all fields on the form, does this class make sense any more?
 */
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
  static URL = 'url';
  static UUID = 'uuid';
  static WATERING_INTERVAL = 'wateringInterval';

  /**
   *
   * @param {Plant} plant
   * @return {*}
   */
  getInitialValues(plant) {
    const firstOf = (arr) => arr[0].id;

    const fieldNames = Object.values(PlantFormFields);
    const initialValues = pick(plant, fieldNames);

    return plant.id ? initialValues : Object.assign(initialValues, {
      [PlantFormFields.LAST_FERTILIZED]: moment(),
      [PlantFormFields.LAST_WATERED]: moment(),
      [PlantFormFields.WATERING_INTERVAL]: 7,
      [PlantFormFields.FERTILIZING_INTERVAL]: 14,
      [PlantFormFields.DIFFICULTY]: firstOf(plantDifficultyOptions),
    });
  }

  getInitialStatus() {
    return FormikApiErrors.getInitialStatus();
  }

  getDateAsYMD(value) {
    return moment.isMoment(value) ? value.format(DATE_FORMAT) : '';
  }

  /**
   *
   * @param {object} apiErrors
   * @param {ApiErrorStatus} status
   * @return {ApiErrors}
   */
  getStatusFromApi(apiErrors, status) {
    return FormikApiErrors.getStatusFromApi(apiErrors, status);
  }


  areValuesEqual(prevValues, nextValues) {
    const prev = prevValues || {};
    const next = nextValues || {};

    const simpleTypeFields = [
      [ PlantFormFields.ID ],
      [ PlantFormFields.BLOOMING ],
      [ PlantFormFields.CATEGORY ],
      [ PlantFormFields.DIFFICULTY ],
      [ PlantFormFields.FERTILIZING_INTERVAL ],
      [ PlantFormFields.NAME ],
      [ PlantFormFields.REQUIRED_EXPOSURE ],
      [ PlantFormFields.REQUIRED_HUMIDITY ],
      [ PlantFormFields.REQUIRED_TEMPERATURE ],
      [ PlantFormFields.ROOM ],
      [ PlantFormFields.URL ], // Not really, as a derivative of ID
      [ PlantFormFields.UUID ],
      [ PlantFormFields.WATERING_INTERVAL ],
    ];

    const simpleTypeDiff = (key) => prev[key] !== next[key];

    if (simpleTypeFields.some(simpleTypeDiff)) {
      return false;
    }

    const dateTimeFields = [
      [ PlantFormFields.LAST_FERTILIZED ],
      [ PlantFormFields.LAST_WATERED ],
    ];

    const dateDiff = (key) => {
      const firstDateTime = prev[key];
      const secondDateTime = next[key];
      const asYmd = plantFormFields.getDateAsYMD;
      return asYmd(firstDateTime) !== asYmd(secondDateTime);
    };

    return !dateTimeFields.some(dateDiff);

  }

  /**
   *
   * @param {Object} values
   * @returns {Plant}
   */
  toModel(values) {
    const plant = new Plant();
    return Object.assign(plant, values);
  }
}

const plantFormFields = new PlantFormFields();

export {
  plantFormFields,
  PlantFormFields
};