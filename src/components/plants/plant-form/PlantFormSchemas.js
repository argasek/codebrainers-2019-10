import * as Yup from 'yup';
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import isSafeInteger from 'lodash-es/isSafeInteger';
import { DATE_FORMAT } from 'constants/Config';
import moment from 'moment-es6';

const toSafeIntegerWithUndefined = (value) => (isSafeInteger(+value) && +value) || undefined;

const positiveIntegerRequired = (requiredMessage) => Yup
  .number()
  .integer('Please enter whole number.')
  .transform(toSafeIntegerWithUndefined)
  .typeError('Please enter a number.')
  .positive('Enter value greater than 0.')
  .required(requiredMessage);

const numericIndex = () => Yup
  .number()
  .transform(toSafeIntegerWithUndefined);

const dateAsYMDValidator = () => Yup
  .mixed()
  .test(
    'is-date-yyyy-mm-dd',
    `Please use ${ DATE_FORMAT } format`,
    (value) => value === undefined || moment(value, DATE_FORMAT, true).isValid()
  );

const commonSchema = Yup.object().shape({
  [PlantFormFields.CATEGORY]: numericIndex().required('Please select a category.'),
  [PlantFormFields.FERTILIZING_INTERVAL]: positiveIntegerRequired('Please enter number of days.'),
  [PlantFormFields.NAME]: Yup.string().trim().required('Please enter a plant name.'),
  [PlantFormFields.REQUIRED_EXPOSURE]: Yup.string().required('Please select exposure.'),
  [PlantFormFields.REQUIRED_HUMIDITY]: Yup.string().required('Please select humidity.'),
  [PlantFormFields.REQUIRED_TEMPERATURE]: Yup.string().required('Please select temperature.'),
  [PlantFormFields.ROOM]: numericIndex(),
  [PlantFormFields.WATERING_INTERVAL]: positiveIntegerRequired('Please enter number of days.'),
  [PlantFormFields.LAST_WATERED]: dateAsYMDValidator(),
  [PlantFormFields.LAST_FERTILIZED]: dateAsYMDValidator()
});

const plantFormCreateSchema = Yup.object()
  .concat(commonSchema);

const plantFormUpdateSchema = Yup.object()
  .shape({
    [PlantFormFields.ID]: Yup.number().required("Missing ID field, something is wrong…"),
  })
  .concat(commonSchema);

export {
  plantFormCreateSchema,
  plantFormUpdateSchema
};