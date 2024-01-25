import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

interface OdsPasswordAttribute extends Omit<OdsCommonFieldAttribute, 'step'> {
  /** Indicates if the password is inline or not */
  inline?: boolean;
  /** Indicates if the input is masked or not */
  masked?: boolean;
}

export type {
  OdsPasswordAttribute,
};
