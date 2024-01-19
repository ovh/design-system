import type { OdsInputValue } from '@ovhcloud/ods-common-core';

interface OdsFormAttribute {
  /**
   * You can init the input with initialValues
   * The attributes is an object with the input name for key and this value
   * you need to set all the input you want to use
   */
  initialValues: Record<string, OdsInputValue> | string,
}

export type {
  OdsFormAttribute,
};
