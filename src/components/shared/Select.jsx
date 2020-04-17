import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const Select = ({ value, name, onChange, options, label }) => {
  const id = `basia${name}`;

  return (
    <FormGroup>
      <Label for={id}>{label}:</Label>
      <Input id={id} type="select" value={value} name={name} onChange={onChange}>
        {
          options.map(item => (
            <option value={item.value} key={item.value}>{item.label}</option>
          ))
        }
      </Input>
    </FormGroup>
  )
};

Select.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,

};

export default Select;