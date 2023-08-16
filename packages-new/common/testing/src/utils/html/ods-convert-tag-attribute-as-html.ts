/**
 * Converts attribute into an HTML-formatted attribute object
 * @param name - The name/key of the attribute
 * @param value - The value of the attribute
 * @returns an object containing the HTML-formatted name and a converted string of the attribute value
 */
function odsConvertTagAttributeAsHTML(name: string, value: unknown): {name: string; value: string} | Record<string, never> {
  return {
    name: name.replace(/([A-Z]?[a-z0-9]*\w)(?:[_-](\w)|([A-Z]))/g, '$1-$2$3')
      .toLowerCase(),
    value: `${value}`
  };
}

export {
  odsConvertTagAttributeAsHTML
}
