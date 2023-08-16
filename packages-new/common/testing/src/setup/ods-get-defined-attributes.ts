/**
 * Extract defined attributes from a given HTML web component
 * @param component - The custom element as HTMLElement
 * @param componentAttributesKeys - The keys that has to be extracted inside the component
 * @returns An object containing all user-defined attributes in the component
 */
function odsGetDefinedAttributes(component: HTMLElement, componentAttributesKeys: string[]): Record<string, string | null> {
  const result: Record<string, string | null> = {};
  componentAttributesKeys.forEach(componentAttribute => {
    const attr = component.getAttribute(componentAttribute);
    if (attr !== null) {
      result[componentAttribute] = attr;
    }
  });
  return result;
}

export {
  odsGetDefinedAttributes
}
