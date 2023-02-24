import { OdsAccordionSize } from './ods-accordion-size';
import { OdsComponentAttributes } from '../ods-component-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export interface OdsAccordionAttributes extends OdsComponentAttributes {
  /** main color: see component principles */
  color?: OdsThemeColorIntent;
  /** contrasted or not: see component principles */
  contrasted?: boolean;
  /** size: see component principles */
  size?: OdsAccordionSize;
  /** opened or not */
  opened?: boolean;
  /** disabled: see component principles */
  disabled?: boolean;
}
