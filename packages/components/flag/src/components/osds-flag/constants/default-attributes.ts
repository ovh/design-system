import type { OdsFlagAttribute } from '../interfaces/attributes';
import { ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-common-core';

/**
 * default attribute values of flag
 */
const DEFAULT_ATTRIBUTE: OdsFlagAttribute = Object.freeze({
  iso: ODS_COUNTRY_ISO_CODE.FR,
  lazy: false,
  src: '',
  assetPath: '',
});

export {
  DEFAULT_ATTRIBUTE,
};
