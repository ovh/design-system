/**
 * is the specified element has `aria-hidden` attribute or not
 * @param hostElement - Element node
 */
export function odsHasAriaHidden<E extends HTMLElement>(hostElement: E): boolean {
  return hostElement.hasAttribute('aria-hidden') && hostElement.getAttribute('aria-hidden') === 'true';
}
