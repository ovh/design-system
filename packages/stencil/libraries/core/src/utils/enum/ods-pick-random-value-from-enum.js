/**
 * return a random value from this enum
 * @param anEnum - an enum interface
 */
export function odsPickRandomValueFromEnum(anEnum) {
  const enumValues = Object.values(anEnum);
  const i = Math.floor(Math.random() * enumValues.length);
  return enumValues[i];
}
