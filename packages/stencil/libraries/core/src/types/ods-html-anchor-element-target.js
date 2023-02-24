/**
 * See target attribute on
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
 */
export var OdsHTMLAnchorElementTarget;
(function (OdsHTMLAnchorElementTarget) {
  OdsHTMLAnchorElementTarget["_blank"] = "_blank";
  OdsHTMLAnchorElementTarget["_self"] = "_self";
  OdsHTMLAnchorElementTarget["_parent"] = "_parent";
  OdsHTMLAnchorElementTarget["_top"] = "_top";
})(OdsHTMLAnchorElementTarget || (OdsHTMLAnchorElementTarget = {}));
export const OdsHTMLAnchorElementTargetList = Object.keys(OdsHTMLAnchorElementTarget).map(key => OdsHTMLAnchorElementTarget[key]);
