import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

interface OdsSelectAttribute extends OdsCommonFieldAttribute {
  /** Indicates if the select is inline or not: see component principles */
  inline?: boolean;
  /** Indicates if the select is open or not */
  opened?: boolean;
}

export {
  OdsSelectAttribute,
};
