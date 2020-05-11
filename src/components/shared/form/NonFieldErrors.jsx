import { connect, getIn } from 'formik';
import { API_ERRORS, API_NON_FIELD_ERRORS } from 'components/shared/form/FormikApiErrors';
import { Alert } from 'reactstrap';
import React from 'react';

const NonFieldError = ({ error, isNotLastError }) => (
  <>
    <p className="mb-2">{ error }</p>
    { isNotLastError && <hr className="mb-2" /> }
  </>
);

const NonFieldErrors = ({ formik: { status }, label = '' }) => {
  const nonFieldErrors = getIn(status, [ API_ERRORS, API_NON_FIELD_ERRORS ]) || [];
  const hasErrors = nonFieldErrors.length > 0;

  return (
    hasErrors &&
    <Alert color="danger">
      { label && <h4 className="alert-heading font-weight-semibold mb-3">{ label }</h4> }
      {
        nonFieldErrors.map((error, index, arr) =>
          <NonFieldError
            isNotLastError={ index < arr.length - 1 }
            error={ error }
            key={ error }
          />
        )
      }
    </Alert>
  );
};

export default connect(NonFieldErrors);