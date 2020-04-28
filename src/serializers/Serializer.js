import { TaJson } from 'ta-json';
import camelcaseKeys from 'camelcase-keys';
import kebabcaseKeys from 'kebabcase-keys';

const plainToClass = function (className, plain) {
  const camelCasePlain = camelcaseKeys(plain);
  const object = TaJson.deserialize(camelCasePlain, className);
  return object;
};

const classToPlain = function (object) {
  const camelCasePlain = TaJson.serialize(object);
  const plain = kebabcaseKeys(camelCasePlain);
  return plain;
};

export {
  classToPlain,
  plainToClass,
};