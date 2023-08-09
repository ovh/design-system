import type { OdsAccordionAttribute } from '../interfaces/attributes';
import { ODS_ACCORDION_SIZE } from './accordion-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsAccordionAttribute = Object.freeze({
  color: OdsThemeColorIntent.info,
  contrasted: false,
  disabled: false,
  opened: false,
  size: ODS_ACCORDION_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};