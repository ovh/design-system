import type { ODS_ICON_NAME } from '../../../../../icon/src';
import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

interface OdsInputAttribute extends OdsCommonFieldAttribute {
  /** Icon to be used in the input field */
  icon?: ODS_ICON_NAME;
  /** Indicates if the input is inline or not: see component principles */
  inline?: boolean;
  /** Indicates if the input is masked or not */
  masked?: boolean;
  /** Maximum value for the input (type number) */
  max?: number;
  /** Minimum value for the input (type number) */
  min?: number;
}

export type {
  OdsInputAttribute,
};
