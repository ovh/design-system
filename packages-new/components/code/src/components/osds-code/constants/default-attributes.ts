import type { OdsCodeAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_CODE_SIZE } from './code-size';

const DEFAULT_ATTRIBUTE: OdsCodeAttribute = Object.freeze({
  color: OdsThemeColorIntent.default,
  contrasted: false,
  size: ODS_CODE_SIZE.md
});

export {
  DEFAULT_ATTRIBUTE,
};
