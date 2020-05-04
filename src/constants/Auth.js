class Auth {
  static token = `plants-auth-token`;
  static httpHeader = 'Authorization';

  static getHeaderValueFromToken(token) {
    return `Token ${ token }`;
  }

  static getTokenFromStorage() {
    return localStorage.getItem(Auth.token) || '';
  }

  static putTokenToStorage(token) {
    return localStorage.setItem(Auth.token, token);
  }

}

export default Auth;