import type { OdsIconAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_ICON_SIZE } from './icon-size';

const DEFAULT_ATTRIBUTE: OdsIconAttribute = Object.freeze({
  ariaName: '',
  color: OdsThemeColorIntent.default,
  contrasted: false,
  hoverable: false,
  name: undefined,
  size: ODS_ICON_SIZE.md,
});

export {
  DEFAULT_ATTRIBUTE,
};
