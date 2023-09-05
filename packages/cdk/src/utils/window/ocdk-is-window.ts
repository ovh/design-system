/**
 * check if the passed argument is a real `window` object of the browser
 * @param windowObj - the window object to check
 */
export function ocdkIsWindow(windowObj: Window): boolean {
  return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
