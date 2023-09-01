import type { OdsFlagAttribute } from '../interfaces/attributes';
import { ODS_FLAG_ISO_CODE } from './flag-iso-code';

/**
 * default attribute values of flag
 */
const DEFAULT_ATTRIBUTE: OdsFlagAttribute = Object.freeze({
  iso: ODS_FLAG_ISO_CODE.FR,
  lazy: false,
  src: '',
  assetPath: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
