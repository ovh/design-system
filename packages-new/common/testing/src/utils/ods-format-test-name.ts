import type { OdsComponentGenericAttributes } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes } from '@ovhcloud/ods-common-core';

/**
 * Converts an attribute object into a formatted string that can be used as a test name.
 * @param attributes - The attribute object to convert.
 * @param separator - (optional) The separator to use between the attributes.
 * @returns The formatted string containing all relevant attribute values.
 */
function odsFormatTestName<T>(attributes: T, separator = ' | '): string {
  const result: string[] = [];
  Object.entries(odsComponentAttributes2StringAttributes<T>(attributes, {} as OdsComponentGenericAttributes<T>)).forEach(([name, value]) => {
    if (value === undefined) {
      result.push(`${name}`);
    } else {
      result.push(`${name}${value === '' ? '' : `=${value}`}`);
    }
  });
  return result.join(separator);
}

export {
  odsFormatTestName
}
