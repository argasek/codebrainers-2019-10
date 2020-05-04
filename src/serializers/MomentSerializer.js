import moment from 'moment-es6';
import Singleton from 'singleton-decorator';

@Singleton
class MomentSerializer {
  serialize(value) {
    if (moment.isMoment(value)) {
      return value.format();
    }
    return value;
  }

  deserialize(property) {
    if (typeof property === 'string' && property.length > 0) {
      return moment(property);
    }
    return property;
  }

  /**
   * @param {Date|*} value
   * @param {*} [emptyValue]
   * @returns {moment.Moment|*}
   */
  fromDate(value, emptyValue = undefined) {
    return value instanceof Date ? moment(value) : emptyValue;
  }

  /**
   * @param {moment.Moment|*} value
   * @param {*} [emptyValue]
   * @returns {Date|*}
   */
  toDate(value, emptyValue = undefined) {
    return moment.isMoment(value) ? value.toDate() : emptyValue;
  }

}

export default MomentSerializer;