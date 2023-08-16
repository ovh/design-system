import { odsComponentAttributes2StringAttributes } from '@ovhcloud/ods-common-core';

/**
 * Create a custom element tag with attributes and content
 *
 * @param tagName - The custom element tag name
 * @param attributes - The tag attributes
 * @param content - Tag HTML content
 *
 * @returns The complete custom element tag as a HTMLElement
 */
function odsCreateHtmlTag<T>(tagName: string, attributes: T, content = ''): HTMLElement {
  const tag = document.createElement(tagName);

  Object.entries(odsComponentAttributes2StringAttributes(attributes, {}))
    .filter(([, value]) => value !== undefined)
    .forEach(([name, value]) => {
      tag.setAttribute(name, value as string);
    });
  tag.innerHTML = content;
  return tag;
}

export {
  odsCreateHtmlTag
}
