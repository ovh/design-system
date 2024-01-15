import type { ODS_ICON_NAME } from '../../../../../icon/src';
import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';
import type { ODS_INPUT_TYPE } from '../public-api';

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
  /** Type of the input field */
  type?: ODS_INPUT_TYPE;
}

export type {
  OdsInputAttribute,
};
