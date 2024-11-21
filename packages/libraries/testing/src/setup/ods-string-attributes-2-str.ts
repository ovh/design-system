import { OdsStringAttributes } from '@ovhcloud/ods-core';

/**
 * get a list of attributes as a string in order to integrate it into a HTML element.
 * In case of undefined value of the attribute, only the attribute name is output, not the value.
 */
export function OdsStringAttributes2Str(attributes: OdsStringAttributes): string {
  return Object.entries(attributes)
    .map(([name, value]) => {
      const kebabName = name.replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
      return value === undefined ? `${kebabName}` : `${kebabName}="${value}"`;
    })
    .join(' ');
}