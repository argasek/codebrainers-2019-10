import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const PlantasticDatePicker = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [ field ] = useField(props);

  const selected = (moment.isMoment(field.value) && field.value.toDate()) || null;

  const onChange = value => {
    const fieldValue = value === null ? value : moment(value);
    setFieldValue(field.name, fieldValue);
  };

  return (
    <DatePicker
      { ...field }
      { ...props }
      selected={ selected }
      onChange={ onChange }
    />
  );
};

export default PlantasticDatePicker;