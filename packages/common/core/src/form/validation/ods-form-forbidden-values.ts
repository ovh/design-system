/**
 * list of unitary forbidden values and/or forbidden ranges.
 * In case of number values, wa can specify a forbidden range.
 * by default the filled type is number.
 */
type OdsFormForbiddenValues<T extends number | string = number> =
  Array<T extends number ? T | { min: number, max: number } : T>;

export {
  OdsFormForbiddenValues,
}
