/**
 * @param term - an enum value or a string
 * @param set - the enum reference that contains values
 */
export function odsIsTermInEnum(term, set) {
  return Object.values(set).includes(term);
}
