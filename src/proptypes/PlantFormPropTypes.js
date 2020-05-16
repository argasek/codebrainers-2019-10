import PropTypes from 'prop-types';
import moment from 'moment-es6';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

const plantFormInitialValuesPropTypes = PropTypes.shape({
  [PlantFormFields.BLOOMING]: PropTypes.bool.isRequired,
  [PlantFormFields.CATEGORY]: PropTypes.number,
  [PlantFormFields.DIFFICULTY]: PropTypes.number.isRequired,
  [PlantFormFields.FERTILIZING_INTERVAL]: PropTypes.number.isRequired,
  [PlantFormFields.LAST_FERTILIZED]: PropTypes.instanceOf(moment),
  [PlantFormFields.LAST_WATERED]: PropTypes.instanceOf(moment),
  [PlantFormFields.NAME]: PropTypes.string.isRequired,
  [PlantFormFields.REQUIRED_EXPOSURE]: PropTypes.string.isRequired,
  [PlantFormFields.REQUIRED_HUMIDITY]: PropTypes.string.isRequired,
  [PlantFormFields.REQUIRED_TEMPERATURE]: PropTypes.string.isRequired,
  [PlantFormFields.ROOM]: PropTypes.number,
  [PlantFormFields.WATERING_INTERVAL]: PropTypes.number.isRequired,
});

const plantFormPropTypesBase = {
  initialValues: plantFormInitialValuesPropTypes,
  onSubmit: PropTypes.func.isRequired,
};

const plantFormPropTypes = {
  ...plantFormPropTypesBase,
  onPlantNameChange: PropTypes.func.isRequired,
};

const plantFormCard = {
  ...plantFormPropTypesBase,
  formLabel: PropTypes.string.isRequired,
};

export {
  plantFormPropTypes,
  plantFormCard,
};