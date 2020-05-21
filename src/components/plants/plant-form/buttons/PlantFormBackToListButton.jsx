import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import compose from 'compose-function';
import withHistoryBackButtonOptions from 'components/shared/WithHistoryBackButtonOptions';
import Routes from 'constants/Routes';

const PlantFormBackToListButton = ({ label, mobileLabel, ...rest }) => {
  return (
    <Button color="secondary" type="button" className="mr-0 mr-md-2" { ...rest } >
      <FontAwesomeIcon icon={ faCaretLeft } className="mr-2" />
      <span className="d-inline d-sm-none">{ mobileLabel }</span>
      <span className="d-none d-sm-inline">{ label }</span>
    </Button>
  );
};

PlantFormBackToListButton.propTypes = {
  label: PropTypes.string.isRequired,
  mobileLabel: PropTypes.string.isRequired,
};

export default compose(
  withHistoryBackButtonOptions
)(PlantFormBackToListButton, { to: Routes.PLANTS });

