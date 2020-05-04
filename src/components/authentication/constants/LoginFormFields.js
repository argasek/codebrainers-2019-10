import Credentials from 'models/Credentials';

class LoginFormFields {
  static USERNAME = 'username';
  static PASSWORD = 'password';

  static getInitialValues() {
    const credentials = new Credentials();

    return credentials;
  }

  /**
   *
   * @param {Object} values
   * @returns {Credentials}
   */
  static toModel(values) {
    const credentials = new Credentials();
    credentials.username = values.username.trim();
    credentials.password = values.password;
    return credentials;
  }
}

export default LoginFormFields;