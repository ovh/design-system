/**
 * Check that the event target specified is really of node type.
 * It allows to make usage of target easier.
 * @example
 * ```
 * const fct = (element: HTMLElement, ev: PointerEvent) => {
 *   ocdkAssertEventTargetIsNode(ev.target);
 *   if (element.contains(ev.target)) {
 *     console.log('the element contains the target')
 *   }
 * }
 * ```
 * @param e - the event target
 */
export function ocdkAssertEventTargetIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`OCDK: manipulation of non node event target.`);
  }
}
