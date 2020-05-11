import Credentials from 'models/Credentials';
import { FormikApiErrors } from 'components/shared/form/FormikApiErrors';

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
   * @param apiErrors
   * @return {ApiErrors}
   */
  getStatusFromApi(apiErrors) {
    return FormikApiErrors.getStatusFromApi(apiErrors);
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