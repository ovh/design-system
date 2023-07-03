/**
 * get two different elements of a list, selected randomly.
 * @param list - elements in which to find
 */
export function OdsGetDifferentElement<T extends unknown>(list: T[]): { element: T|undefined, elementNext: T|undefined } {
  const index = 0;
  const indexNext = index === (list.length - 1) ? 0 : index + 1;
  return { element: list[ index ], elementNext: list[ indexNext ] };
}
