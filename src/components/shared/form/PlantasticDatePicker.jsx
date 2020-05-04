import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import MomentSerializer from 'serializers/MomentSerializer';

const momentSerializer = new MomentSerializer();

const PlantasticDatePicker = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [ field ] = useField(props);

  const onChange = value => {
    const fieldValue = momentSerializer.fromDate(value);
    setFieldValue(field.name, fieldValue);
  };

  const selected = momentSerializer.toDate(field.value);

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