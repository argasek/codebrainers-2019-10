import PropTypes from 'prop-types';
import moment from 'moment-es6';
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import { categoriesPropType } from 'proptypes/CategoriesPropTypes';
import { roomsPropType } from 'proptypes/RoomsPropTypes';

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

const plantFormInformationPropTypes = {
  categories: categoriesPropType,
  rooms: roomsPropType,
};

const plantInProgressPropType = PropTypes.string.isRequired;

const plantFormPropTypesBase = {
  ...plantFormInformationPropTypes,
  initialValues: plantFormInitialValuesPropTypes,
  onSubmit: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
  plantInProgress: plantInProgressPropType,
};

const plantFormPropTypes = {
  ...plantFormPropTypesBase,
  onPlantNameChange: PropTypes.func.isRequired,
};

const plantFormCardPropTypes = {
  ...plantFormPropTypesBase,
  formLabel: PropTypes.string.isRequired,
};

export {
  plantFormCardPropTypes,
  plantFormInformationPropTypes,
  plantFormPropTypes,
  plantInProgressPropType,
};