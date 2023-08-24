import type { ODS_ACCORDION_SIZE } from '../constants/accordion-size';
import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

interface OdsAccordionAttribute {
  /** main color: see component principles */
  color?: OdsThemeColorIntent;
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** disabled: see component principles */
  disabled?: boolean;
  /** opened or not */
  opened?: boolean;
  /** size: see component principles */
  size?: ODS_ACCORDION_SIZE;
}

export {
  OdsAccordionAttribute,
};
