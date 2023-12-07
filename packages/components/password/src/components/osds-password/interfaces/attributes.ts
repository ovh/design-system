import type { OdsCommonFieldAttribute, OdsFormForbiddenValues } from '@ovhcloud/ods-common-core';

interface OdsPasswordAttribute extends OdsCommonFieldAttribute {
  /** ariaLabel of the password */
  ariaLabel: HTMLElement['ariaLabel'];
  /** Indicates if the password is contrasted or not: see component principles */
  contrasted?: boolean;
  /** List of forbidden values for the password */
  forbiddenValues: OdsFormForbiddenValues;
  /** Indicates if the password is inline or not */
  inline?: boolean;
  /** Indicates if the password is read-only or not */
  readOnly?: boolean;
  /** Current value of the password */
  value: string;
}

export type {
  OdsPasswordAttribute,
};
