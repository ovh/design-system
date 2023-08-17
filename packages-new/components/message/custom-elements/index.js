export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';
export { OsdsMessage, defineCustomElement as defineCustomElementOsdsMessage } from './osds-message.js';
import './osds-icon2.js';
export { OsdsIcon, defineCustomElement as defineCustomElementOsdsIcon } from './osds-icon.js';

var ODS_MESSAGE_TYPE;
(function (ODS_MESSAGE_TYPE) {
  ODS_MESSAGE_TYPE["error"] = "error";
  ODS_MESSAGE_TYPE["info"] = "info";
  ODS_MESSAGE_TYPE["success"] = "success";
  ODS_MESSAGE_TYPE["warning"] = "warning";
})(ODS_MESSAGE_TYPE || (ODS_MESSAGE_TYPE = {}));
const ODS_MESSAGE_TYPES = Object.freeze(Object.values(ODS_MESSAGE_TYPE));

export { ODS_MESSAGE_TYPE, ODS_MESSAGE_TYPES };
