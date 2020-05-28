import get from 'lodash-es/get';
import HttpStatus from 'http-status-codes';
import { compile } from 'path-to-regexp';
import camelcaseKeys from 'camelcase-keys';
import camelCase from 'lodash-es/camelCase';

const API_ERRORS = 'apiErrors';
const API_NON_FIELD_ERRORS = camelCase('non_field_errors');

const ApiErrorTypes = Object.freeze({
  CLIENT: 'client',
  SERVER: 'server',
  UNKNOWN: 'unknown'
});

const ApiClientStatus = Object.freeze({
  EAI_AGAIN: 'EAI_AGAIN',
  ECONNABORTED: 'ECONNABORTED',
  ECONNREFUSED: 'ECONNREFUSED',
  ECONNRESET: 'ECONNRESET',
  EHOSTUNREACH: 'EHOSTUNREACH',
  ENOTFOUND: 'ENOTFOUND',
  ETIMEDOUT: 'ETIMEDOUT',
});

const ApiGenericStatus = Object.freeze({
  UNKNOWN: 'unknown'
});

class Api {
  static baseUrl = process.env.REACT_APP_PLANTS_API_URL;
  static timeout = process.env.REACT_APP_PLANTS_API_TIMEOUT;
  static AUTH_TOKEN = '/api-token-auth/';
  static PLANTS = '/plants/';
  static PLANT = '/plants/:plantId/';
  static CATEGORIES = '/categories/';
  static ROOMS = '/rooms/';

  /**
   * @private
   */
  _getStatus(error) {
    /**
     * @type {AxiosResponse}
     */
    const response = error.response;
    const request = error.request;

    const status = new ApiErrorStatus();

    if (response) {
      status.type = ApiErrorTypes.SERVER;
      status.code = get(response, 'status', HttpStatus.IM_A_TEAPOT);
      return status;
    }

    if (request) {
      status.type = ApiErrorTypes.CLIENT;

      // Workaround: Axios has some strange way to represent client timeout,
      // returning ECONNABORTED instead
      const connectionAborted = error.code === ApiClientStatus.ECONNABORTED;
      const messageHasTimeout = error.message.indexOf('timeout') !== -1;
      if (connectionAborted && messageHasTimeout) {
        status.code = ApiClientStatus.ETIMEDOUT;
      } else {
        status.code = error.code;
      }
      return status;
    }

    return status;
  }

  // ECONNABORTED
  /**
   *
   * @param {object} error
   * @return {{errors: object, status: ApiErrorStatus}}
   */
  getErrorsFromApi(error) {
    const { response } = error;
    const errors = camelcaseKeys(get(response, 'data', {}));
    const status = this._getStatus(error);
    return {
      errors,
      status,
    };
  }

  getPath(url, options) {
    const toPath = compile(url, { encode: encodeURIComponent });
    return toPath(options);
  }
}

class ApiErrorStatus {
  /**
   * @type {symbol|number}
   */
  code = ApiGenericStatus.UNKNOWN;
  type = ApiErrorTypes.UNKNOWN;
}

class ApiErrors {
  constructor(apiErrors = {}) {
    this[API_ERRORS] = apiErrors;
  }
}

export {
  Api,
  API_ERRORS,
  API_NON_FIELD_ERRORS,
  ApiClientStatus,
  ApiErrors,
  ApiErrorStatus,
  ApiErrorTypes,
  ApiGenericStatus,
};