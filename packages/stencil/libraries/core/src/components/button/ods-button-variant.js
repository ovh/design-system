export var OdsButtonVariant;
(function (OdsButtonVariant) {
  OdsButtonVariant["flat"] = "flat";
  OdsButtonVariant["stroked"] = "stroked";
  OdsButtonVariant["ghost"] = "ghost";
})(OdsButtonVariant || (OdsButtonVariant = {}));
export const OdsButtonVariantList = Object.keys(OdsButtonVariant)
  .map((key) => OdsButtonVariant[key]);
