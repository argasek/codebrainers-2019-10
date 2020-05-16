import React from 'react';
import PropTypes from 'prop-types';

const OptionPleaseSelect = ({ value = '' }) => <option value={ value } hidden>Please select…</option>;

OptionPleaseSelect.propTypes = {
  value: PropTypes.any,
};

export default OptionPleaseSelect;
