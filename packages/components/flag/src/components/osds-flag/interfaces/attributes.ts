import type { ODS_FLAG_ISO_CODE } from "../constants/flag-iso-code";

interface OdsFlagAttribute {
  /**
   * override the `ODS` directory path of the assets.
   * if not set, the configured path in `ODS` will be used.
   */
  assetPath?: string;
  /**
   * Flag ISO country code
   */
  iso?: ODS_FLAG_ISO_CODE;
  /**
   * allow to lazy load the content only when it's visible
   */
  lazy: boolean;
  /**
   * override with custom src to the svg file.
   */
  src?: string;
}

export {
  OdsFlagAttribute,
};
