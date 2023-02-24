/**
 * check if the passed argument is an `OdsValidityState`
 * @param value - possible object corresponding to `OdsValidityState`
 */
export function isOdsValidityState(value) {
  const hasProperty = (k) => Object.prototype.hasOwnProperty.call(value, k);
  return !!(value && hasProperty("invalid", value));
}
/**
 * check if the passed argument is a property key of `OdsValidityState`
 * @param name - possible string corresponding to a key
 */
export function isOdsValidityStateProperty(name) {
  const keys = ["invalid", "stepMismatch", "valueMissing", "valid"];
  return keys.some(k => k === name);
}
