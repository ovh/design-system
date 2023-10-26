import type { OdsFlagAttribute } from '../interfaces/attributes';
import { ODS_FLAG_ISO_CODE } from './flag-iso-code';

const DEFAULT_ATTRIBUTE: OdsFlagAttribute = Object.freeze({
  assetPath: '',
  iso: ODS_FLAG_ISO_CODE.FR,
  lazy: false,
  src: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
