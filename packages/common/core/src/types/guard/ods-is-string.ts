/**
 * is the value is a string
 * @param val - value
 */
export function odsIsStr(val: unknown): val is string {
  return typeof val === 'string';
}
