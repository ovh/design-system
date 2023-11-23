import type { OdsFormForbiddenValues, OdsGenericFormFieldAttribute, ODS_INPUT_TYPE, OdsInputValue } from '@ovhcloud/ods-common-core';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';

interface OdsInputAttribute extends OdsGenericFormFieldAttribute {
  /** Repeat this attribute because it cannot be undefined in osds-input */
  ariaLabel: HTMLElement['ariaLabel'];
  /** Indicates if the input is contrasted or not: see component principles */
  contrasted?: boolean;
  /** Default value of the input */
  defaultValue: OdsInputValue;
  /** Repeat this attribute because it cannot be undefined in osds-input */
  forbiddenValues: OdsFormForbiddenValues;
  /** Icon to be used in the input field */
  icon?: ODS_ICON_NAME;
  /** Indicates if the input is inline or not: see component principles */
  inline?: boolean;
  /** Maximum value for the input (type number) */
  max?: number;
  /** Minimum value for the input (type number) */
  min?: number;
  /** Repeat this attribute because it cannot be undefined in osds-input */
  type: ODS_INPUT_TYPE;
  /** Repeat this attribute because it cannot be undefined in osds-input */
  value: OdsInputValue;
}

export type {
  OdsInputAttribute,
};
