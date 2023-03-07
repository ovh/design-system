export var OdsBreadcrumbsReferrerpolicy;
(function (OdsBreadcrumbsReferrerpolicy) {
  OdsBreadcrumbsReferrerpolicy["no-referrer"] = "no-referrer";
  OdsBreadcrumbsReferrerpolicy["no-referrer-when-downgrade"] = "no-referrer-when-downgrade";
  OdsBreadcrumbsReferrerpolicy["origin"] = "origin";
  OdsBreadcrumbsReferrerpolicy["origin-when-cross-origin"] = "origin-when-cross-origin";
  OdsBreadcrumbsReferrerpolicy["same-origin"] = "same-origin";
  OdsBreadcrumbsReferrerpolicy["strict-origin-when-cross-origin"] = "strict-origin-when-cross-origin";
  OdsBreadcrumbsReferrerpolicy["unsafe-url"] = "unsafe-url";
})(OdsBreadcrumbsReferrerpolicy || (OdsBreadcrumbsReferrerpolicy = {}));
export const OdsBreadcrumbsReferrerpolicyList = Object.keys(OdsBreadcrumbsReferrerpolicy).map(key => OdsBreadcrumbsReferrerpolicy[key]);
