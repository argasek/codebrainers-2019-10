import Credentials from 'models/Credentials';
import { FormikApiErrors } from 'components/shared/form/FormikApiErrors';
import * as Yup from 'yup';

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

  getValidationSchema() {
    const validationSchema = Yup.object().shape({
      [this.USERNAME]: Yup.string().trim().required('Please provide your login.'),
      [this.PASSWORD]: Yup.string().required('Please provide your password.'),
    });

    return validationSchema;
  }

  getValidateOnMount() {
    return true;
  }

  /**
   *
   * @param {object} apiErrors
   * @param {ApiErrorStatus} status
   * @return {ApiErrors}
   */
  getStatusFromApi(apiErrors, status) {
    return FormikApiErrors.getStatusFromApi(apiErrors, status);
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