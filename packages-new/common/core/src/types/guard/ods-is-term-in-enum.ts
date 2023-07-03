/**
 * @param term - an enum value or a string
 * @param set - the enum reference that contains values
 */
export function odsIsTermInEnum<T>(term: T | string, set: Record<string, unknown>): term is T {
  return Object.values(set).includes(term as unknown);
}
