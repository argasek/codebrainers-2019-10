import { getIn } from 'formik';

const API_ERRORS = 'apiErrors';
const API_NON_FIELD_ERRORS = 'non_field_errors';

class ApiErrors {
  constructor(apiErrors = {}) {
    this[API_ERRORS] = apiErrors;
  }
}

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

  static getStatusFromApi = function (apiErrors) {
    return new ApiErrors(apiErrors);
  };

}

export {
  API_ERRORS,
  API_NON_FIELD_ERRORS,
  ApiErrors,
  FormikApiErrors,
};