import axios from 'axios';

class Auth {
  static emptyToken = '';
  static token = `plants-auth-token`;
  static httpHeader = 'Authorization';

  static getHeaderValueFromToken(token) {
    return `Token ${ token }`;
  }

  static getTokenFromStorage() {
    return localStorage.getItem(Auth.token) || Auth.emptyToken;
  }

  static putTokenToStorage(token) {
    return localStorage.setItem(Auth.token, token);
  }

  static appendAxiosAuthorizationHeader(token) {
    return function () {
      const isAuthenticated = token !== Auth.emptyToken;
      if (isAuthenticated) {
        const value = Auth.getHeaderValueFromToken(token);
        axios.defaults.headers.common[Auth.httpHeader] = value;
      } else {
        delete axios.defaults.headers.common[Auth.httpHeader];
      }
    };
  };

}

export default Auth;