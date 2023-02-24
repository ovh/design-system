export var OdsLinkReferrerpolicy;
(function (OdsLinkReferrerpolicy) {
  OdsLinkReferrerpolicy["no-referrer"] = "no-referrer";
  OdsLinkReferrerpolicy["no-referrer-when-downgrade"] = "no-referrer-when-downgrade";
  OdsLinkReferrerpolicy["origin"] = "origin";
  OdsLinkReferrerpolicy["origin-when-cross-origin"] = "origin-when-cross-origin";
  OdsLinkReferrerpolicy["same-origin"] = "same-origin";
  OdsLinkReferrerpolicy["strict-origin-when-cross-origin"] = "strict-origin-when-cross-origin";
  OdsLinkReferrerpolicy["unsafe-url"] = "unsafe-url";
})(OdsLinkReferrerpolicy || (OdsLinkReferrerpolicy = {}));
export const OdsLinkReferrerpolicyList = Object.keys(OdsLinkReferrerpolicy).map(key => OdsLinkReferrerpolicy[key]);
