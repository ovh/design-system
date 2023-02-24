import { OdsAccordionAttributes } from './ods-accordion-attributes';
import { OdsAccordionSize } from './ods-accordion-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * Default attribute values of Accordion component
 * (this are values for `odsAccordionDefaultAttributes`)
 * @enum
 */
export const odsAccordionDefaultAttributesDoc: OdsAccordionAttributes  = {
  color: OdsThemeColorIntent.info,
  contrasted: false,
  size: OdsAccordionSize.md,
  opened: false,
  disabled: false
} as const;

export const odsAccordionDefaultAttributes = odsAccordionDefaultAttributesDoc;
