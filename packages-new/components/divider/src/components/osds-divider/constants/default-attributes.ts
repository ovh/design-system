import type { OdsDividerAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_DIVIDER_SIZE } from './divider-size';

const DEFAULT_ATTRIBUTE: OdsDividerAttribute = Object.freeze({
  color: OdsThemeColorIntent.default,
  contrasted: false,
  separator: false,
  size: ODS_DIVIDER_SIZE.six,
});

export {
  DEFAULT_ATTRIBUTE,
};
