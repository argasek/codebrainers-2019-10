import { getIn } from 'formik';
import HttpStatus from 'http-status-codes';

const API_ERRORS = 'apiErrors';
const API_NON_FIELD_ERRORS = 'non_field_errors';

class ApiErrors {
  constructor(apiErrors = {}) {
    this[API_ERRORS] = apiErrors;
  }
}

const getErrorMessageForHttpStatusCode = function (httpStatusCode) {
  switch (httpStatusCode) {
    case HttpStatus.IM_A_TEAPOT:
      return 'Unable to connect, network is offline';
    default:
      console.warn('TODO: provide handling for other status codes, broken network connection etc.');
      return 'Unhandled API error';
  }
};

class FormikApiErrors {

  static getError = function (name, form) {
    const { touched, errors, status } = form;

    const fieldTouched = getIn(touched, name);
    const backendError = getIn(status, [ API_ERRORS, name ]);
    const frontendError = getIn(errors, name);

    if (frontendError && fieldTouched) {
      return frontendError;
    }

    if (backendError && !fieldTouched) {
      return backendError;
    }

    return undefined;
  };

  static getInitialStatus = function () {
    return new ApiErrors();
  };

  static getStatusFromApi = function (apiErrors, httpStatusCode) {
    if (httpStatusCode === HttpStatus.BAD_REQUEST) {
      return new ApiErrors(apiErrors);
    }

    const customErrorMessage = getErrorMessageForHttpStatusCode(httpStatusCode);
    const customErrors = {
      [API_NON_FIELD_ERRORS]: [ customErrorMessage ]
    };

    return new ApiErrors(customErrors);
  };

}

export {
  API_ERRORS,
  API_NON_FIELD_ERRORS,
  ApiErrors,
  FormikApiErrors,
};