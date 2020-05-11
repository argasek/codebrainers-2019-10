class Credentials {

  constructor() {
    this.username = '';
    this.password = '';
  }

  clone() {
    const credentials = new Credentials();
    credentials.username = this.username;
    credentials.password = this.password;
    return credentials;
  }

}

export default Credentials;

