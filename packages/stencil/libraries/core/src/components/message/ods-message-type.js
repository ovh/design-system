export var OdsMessageType;
(function (OdsMessageType) {
  OdsMessageType["error"] = "error";
  OdsMessageType["info"] = "info";
  OdsMessageType["success"] = "success";
  OdsMessageType["warning"] = "warning";
})(OdsMessageType || (OdsMessageType = {}));
export const OdsMessageTypeList = Object.keys(OdsMessageType)
  .map((key) => OdsMessageType[key]);
