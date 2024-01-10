import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

interface OdsPasswordAttribute extends OdsCommonFieldAttribute {
  /** Indicates if the password is inline or not */
  inline?: boolean;
  /** Indicates if the input is masked or not */
  masked?: boolean;
  /** Current value of the password */
  value: string;
}

export type {
  OdsPasswordAttribute,
};
