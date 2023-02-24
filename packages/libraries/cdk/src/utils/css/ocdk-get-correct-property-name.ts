import {
  ocdkCssPropertyNameMap,
  OcdkPrefixedCssPropertyName,
  OcdkStandardCssPropertyName
} from './ocdk-css-property-name-map';
import { ocdkIsWindow } from '../window/ocdk-is-window';

export function ocdkGetCorrectPropertyName(windowObj: Window, cssProperty: OcdkStandardCssPropertyName):
  OcdkStandardCssPropertyName | OcdkPrefixedCssPropertyName {
  if (ocdkIsWindow(windowObj) && cssProperty in ocdkCssPropertyNameMap) {
    const el = windowObj.document.createElement('div');
    const { standard, prefixed } = ocdkCssPropertyNameMap[ cssProperty ];
    const isStandard = standard in el.style;
    return isStandard ? standard : prefixed;
  }
  return cssProperty;
}
