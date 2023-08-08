import { ODS_ACCORDION_SIZE } from '../constants/accordion-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

interface OdsAccordionAttributes {
  /** main color: see component principles */
  color?: OdsThemeColorIntent;
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** size: see component principles */
  size?: ODS_ACCORDION_SIZE;
  /** opened or not */
  opened?: boolean;
  /** disabled: see component principles */
  disabled?: boolean;
}

export {
  OdsAccordionAttributes,
}