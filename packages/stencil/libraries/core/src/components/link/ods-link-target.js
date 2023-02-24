export var OdsLinkTarget;
(function (OdsLinkTarget) {
  OdsLinkTarget["_blank"] = "_blank";
  OdsLinkTarget["_self"] = "_self";
  OdsLinkTarget["_parent"] = "_parent";
  OdsLinkTarget["_top"] = "_top";
})(OdsLinkTarget || (OdsLinkTarget = {}));
export const OdsLinkTargetList = Object.keys(OdsLinkTarget).map(key => OdsLinkTarget[key]);
