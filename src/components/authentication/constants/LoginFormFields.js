import Credentials from 'models/Credentials';
import { ApiErrors, FormikApiErrors } from 'components/shared/form/FormikApiErrors';

class LoginFormFields {
  USERNAME = 'username';
  PASSWORD = 'password';

  getInitialValues() {
    const credentials = new Credentials();

    return credentials;
  }

  getInitialStatus() {
    return FormikApiErrors.getInitialStatus();
  }

  /**
   *
   * @param {object} apiErrors
   * @param {number} httpStatusCode
   * @return {ApiErrors}
   */
  getStatusFromApi(apiErrors, httpStatusCode) {
    return FormikApiErrors.getStatusFromApi(apiErrors, httpStatusCode);
  }

  /**
   *
   * @param {Object} values
   * @returns {Credentials}
   */
  toModel(values) {
    const credentials = new Credentials();
    credentials.username = values.username.trim();
    credentials.password = values.password;
    return credentials;
  }

}

const loginFormFields = new LoginFormFields();

export default loginFormFields;