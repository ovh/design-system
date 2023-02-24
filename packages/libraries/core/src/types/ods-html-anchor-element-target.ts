/**
 * See target attribute on
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
 */
export enum OdsHTMLAnchorElementTarget {
  _blank = '_blank',
  _self = '_self',
  _parent = '_parent',
  _top = '_top',
}

export type OdsHTMLAnchorElementTargetUnion = `${OdsHTMLAnchorElementTarget}`;

export const OdsHTMLAnchorElementTargetList = Object.keys(OdsHTMLAnchorElementTarget).map(key => OdsHTMLAnchorElementTarget[key as OdsHTMLAnchorElementTargetUnion]);
