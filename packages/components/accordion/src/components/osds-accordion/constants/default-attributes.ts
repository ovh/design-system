import type {OdsAccordionAttribute} from '../interfaces/attributes';
import {ODS_ACCORDION_SIZE} from './accordion-size';
import {ODS_THEME_COLOR_INTENT} from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsAccordionAttribute = Object.freeze({
  color: ODS_THEME_COLOR_INTENT.info,
  contrasted: false,
  disabled: false,
  opened: false,
  size: ODS_ACCORDION_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};
