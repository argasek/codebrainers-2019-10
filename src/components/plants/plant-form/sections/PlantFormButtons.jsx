import React from "react";
import { Button, FormGroup } from "reactstrap";
import PropTypes from 'prop-types';

/**
 * @component
 */
const PlantFormButtons = ({ cancelLabel, submitDisabled, submitLabel }) => {
  return (
    <React.Fragment>
      <hr className="mb-4 mt-4" />
      <FormGroup className="mb-2">
        <Button color="primary" type="submit" disabled={ submitDisabled }>
          { submitLabel }
        </Button>
        <Button color="secondary" type="reset" className="ml-0 ml-md-2">
          { cancelLabel }
        </Button>
      </FormGroup>
    </React.Fragment>
  );
};

PlantFormButtons.propTypes = {
  cancelLabel: PropTypes.string.isRequired,
  submitLabel: PropTypes.string.isRequired,
  submitDisabled: PropTypes.bool.isRequired,
};

export default React.memo(PlantFormButtons);
