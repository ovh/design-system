import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';


interface OdsSelectAttribute extends OdsCommonFieldAttribute {
  color: ODS_THEME_COLOR_INTENT;
  /** full width or not: see component principles */
  inline: boolean;
  /** opened or not */
  opened?: boolean;
}

export {
  OdsSelectAttribute,
};
