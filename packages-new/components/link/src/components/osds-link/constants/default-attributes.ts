import type { OdsLinkAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const DEFAULT_ATTRIBUTE: OdsLinkAttribute = Object.freeze({
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  download: undefined,
  href: undefined,
  referrerpolicy: undefined,
  rel: undefined,
  target: undefined,
  type: undefined,
});

export {
  DEFAULT_ATTRIBUTE,
};
