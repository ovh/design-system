import { ODS_COUNTRY_ISO_CODE } from '../../i18n/ods-country-iso-codes.types';
import { OdsComponentAttributes } from '../ods-component-attributes';

export interface OdsFlagAttributes extends OdsComponentAttributes {
  /**
   * Flag ISO country code
   */
  iso: ODS_COUNTRY_ISO_CODE | undefined;
  /**
   * allow to lazy load the content only when it's visible
   */
  lazy: boolean;
  /**
   * override with custom src to the svg file.
   */
  src: string | undefined;
  /**
   * override the `ODS` directory path of the assets.
   * if not set, the configured path in `ODS` will be used.
   */
  assetPath: string | undefined;
}
