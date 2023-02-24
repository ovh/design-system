export var OdsThemeColorIntent;
(function (OdsThemeColorIntent) {
  OdsThemeColorIntent["default"] = "default";
  OdsThemeColorIntent["primary"] = "primary";
  OdsThemeColorIntent["text"] = "text";
  OdsThemeColorIntent["accent"] = "accent";
  OdsThemeColorIntent["error"] = "error";
  OdsThemeColorIntent["warning"] = "warning";
  OdsThemeColorIntent["success"] = "success";
  OdsThemeColorIntent["info"] = "info";
  OdsThemeColorIntent["promotion"] = "promotion";
})(OdsThemeColorIntent || (OdsThemeColorIntent = {}));
export const OdsThemeColorIntentList = Object.keys(OdsThemeColorIntent)
  .map((key) => OdsThemeColorIntent[key]);
