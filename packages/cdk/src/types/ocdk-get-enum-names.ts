import {OcdkEnumObject} from './ocdk-get-enum-values';

export function ocdkGetEnumNames<E extends OcdkEnumObject>(enumObject: E): Array<E> {
  return Object.keys(enumObject)
    .filter((key) => Number.isNaN(Number(key)))
    .map((key) => key as unknown as E);
}
