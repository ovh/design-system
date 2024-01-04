import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

interface OdsPasswordAttribute extends OdsCommonFieldAttribute {
  /** Indicates if the password is contrasted or not: see component principles */
  contrasted?: boolean;
  /** Indicates if the password is inline or not */
  inline?: boolean;
  /** Current value of the password */
  value: string;
}

export type {
  OdsPasswordAttribute,
};
