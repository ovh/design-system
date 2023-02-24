export var OdsTileVariant;
(function (OdsTileVariant) {
  OdsTileVariant["flat"] = "flat";
  OdsTileVariant["stroked"] = "stroked";
  OdsTileVariant["ghost"] = "ghost";
  OdsTileVariant["hollow"] = "hollow";
})(OdsTileVariant || (OdsTileVariant = {}));
export const OdsTileVariantList = Object.keys(OdsTileVariant)
  .map((key) => OdsTileVariant[key]);
