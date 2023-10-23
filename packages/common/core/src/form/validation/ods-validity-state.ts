import {OdsUsedValidityState} from './ods-used-validity-state';

/**
 * Ods representation of an input error state.
 * Based on the vanilla one, plus some specific properties
 */
export interface OdsValidityState extends OdsUsedValidityState {
  /* is the state is invalid */
  invalid: boolean;
  forbiddenValue: boolean;
}

/**
 * check if the passed argument is an `OdsValidityState`
 * @param value - possible object corresponding to `OdsValidityState`
 */
export function isOdsValidityState(value?: unknown): value is OdsValidityState {
  const hasProperty: (key: keyof OdsValidityState, value?: unknown) => boolean = (k) => Object.prototype.hasOwnProperty.call(value, k);
  return !!(value && hasProperty('invalid', value));
}

/**
 * check if the passed argument is a property key of `OdsValidityState`
 * @param name - possible string corresponding to a key
 */
export function isOdsValidityStateProperty(name: unknown): name is keyof OdsValidityState {
  const keys: Array<keyof OdsValidityState> = ['invalid', 'stepMismatch', 'valueMissing', 'valid'];
  return keys.some((k) => k === name);
}
