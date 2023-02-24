import { OdsFlagAttributes } from './ods-flag-attributes';
import { ODS_COUNTRY_ISO_CODE } from '../../i18n/ods-country-iso-codes.types';

/**
 * default attribute values of flag
 */
export const odsFlagDefaultAttributesDoc  = {
  iso: ODS_COUNTRY_ISO_CODE.FR,
  lazy: false
} as const;

export const odsFlagDefaultAttributes = odsFlagDefaultAttributesDoc as OdsFlagAttributes;
