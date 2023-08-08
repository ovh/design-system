import { OdsAccordionAttributes } from '../interfaces/attributes';
import { ODS_ACCORDION_SIZE } from './accordion-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsAccordionAttributes = Object.freeze({
  color: OdsThemeColorIntent.info,
  contrasted: false,
  size: ODS_ACCORDION_SIZE.md,
  opened: false,
  disabled: false
});

export {
  DEFAULT_ATTRIBUTE,
};