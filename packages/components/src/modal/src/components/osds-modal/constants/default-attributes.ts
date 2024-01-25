import type { OdsModalAttribute } from '../interfaces/attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

const DEFAULT_ATTRIBUTE: OdsModalAttribute = Object.freeze({
  color: ODS_THEME_COLOR_INTENT.info,
  dismissible: true,
  headline: '',
  masked: true,
});

export {
  DEFAULT_ATTRIBUTE,
};
