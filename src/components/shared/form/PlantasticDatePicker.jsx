import DatePicker from 'react-datepicker';
import MomentSerializer from 'serializers/MomentSerializer';
import React, { forwardRef } from 'react';
import { Button, FormFeedback, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { DATE_FORMAT } from 'constants/Config';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useField, useFormikContext } from 'formik';
import { FormikApiErrors } from 'components/shared/form/FormikApiErrors';

const momentSerializer = new MomentSerializer();

const CustomDatepickerInput = forwardRef((props, ref) => (
  <InputGroup>
    <Input { ...props } type="text" innerRef={ ref } />
    <InputGroupAddon addonType="append">
      <Button color="secondary" outline={ true } onClick={ props.onClick }>
        <FontAwesomeIcon icon={ faCalendarAlt } />
      </Button>
    </InputGroupAddon>
  </InputGroup>
));

const PlantasticDatePicker = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [ field ] = useField(props);
  const form = useFormikContext();

  const onChange = value => {
    const fieldValue = momentSerializer.fromDate(value);
    setFieldValue(field.name, fieldValue);
  };

  const selected = momentSerializer.toDate(field.value);
  const ref = React.createRef();
  const customInput = <CustomDatepickerInput placeholder={ DATE_FORMAT } ref={ ref } />;

  const error = FormikApiErrors.getError(field.name, form);
  const invalid = !!error;

  return (
    <>
      <DatePicker
        { ...field }
        { ...props }
        customInput={ customInput }
        onChange={ onChange }
        selected={ selected }
      />
      { invalid && <FormFeedback>{ error }</FormFeedback> }
    </>
  );
};

export default PlantasticDatePicker;