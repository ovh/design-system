import { OdsComponentAttributes } from '../../ods-component-attributes';
import { OdsTooltipVariant } from './ods-tooltip-variant';

export interface OdsTooltipAttributes extends OdsComponentAttributes {
  /** with or without visible tip: see component principles */
  variant?: OdsTooltipVariant;
}
