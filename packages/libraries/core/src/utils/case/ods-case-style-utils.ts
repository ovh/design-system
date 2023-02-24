/**
 * convert a camelCase to a kebab-case
 * @param anEnum - an enum interface
 */
 export function odsCamelCase2KebabCase(str: string): string {
     return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  }
  