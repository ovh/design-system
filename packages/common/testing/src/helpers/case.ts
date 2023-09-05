/**
 * Convert a camelCase to a kebab-case
 * @param str - string to convert
 */
function odsCamelCase2KebabCase(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export {
  odsCamelCase2KebabCase,
}
