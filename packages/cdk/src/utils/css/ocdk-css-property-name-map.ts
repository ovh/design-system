export type OcdkStandardCssPropertyName =
  'animation' | 'transform' | 'transition';

export type OcdkPrefixedCssPropertyName =
  '-webkit-animation' | '-webkit-transform' | '-webkit-transition';


export interface OcdkCssVendorProperty {
  prefixed: OcdkPrefixedCssPropertyName;
  standard: OcdkStandardCssPropertyName;
}

export type OcdkCssVendorPropertyMap = { [K in OcdkStandardCssPropertyName]: OcdkCssVendorProperty };

export const ocdkCssPropertyNameMap: OcdkCssVendorPropertyMap = {
  animation: {
    prefixed: '-webkit-animation',
    standard: 'animation',
  },
  transform: {
    prefixed: '-webkit-transform',
    standard: 'transform',
  },
  transition: {
    prefixed: '-webkit-transition',
    standard: 'transition',
  },
};
