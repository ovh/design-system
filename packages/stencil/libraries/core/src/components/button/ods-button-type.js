export var OdsButtonType;
(function (OdsButtonType) {
  OdsButtonType["button"] = "button";
  OdsButtonType["submit"] = "submit";
  OdsButtonType["reset"] = "reset";
})(OdsButtonType || (OdsButtonType = {}));
export const OdsButtonTypeList = Object.keys(OdsButtonType)
  .map((key) => OdsButtonType[key]);
