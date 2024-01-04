import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';


interface OdsSelectAttribute extends OdsCommonFieldAttribute {
  /** full width or not: see component principles */
  inline?: boolean;
  /** opened or not */
  opened?: boolean;
}

export {
  OdsSelectAttribute,
};
