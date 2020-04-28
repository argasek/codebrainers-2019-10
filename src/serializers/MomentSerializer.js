import moment from 'moment-es6';

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
}

export default MomentSerializer;