import { OdsTooltipAttributes } from './ods-tooltip-attributes';
import { OdsTooltipVariant } from './ods-tooltip-variant';

export const odsTooltipDefaultAttributesDoc  = {
  variant: OdsTooltipVariant.standard,
} as const;

export const odsTooltipDefaultAttributes = odsTooltipDefaultAttributesDoc as OdsTooltipAttributes;
