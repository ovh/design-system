/**
 * check if the string is formatted as a src with path to a file
 * @param str - string to check
 */
export function odsIsSrc(str) {
  return str.length > 0 && /([/.])/.test(str);
}
