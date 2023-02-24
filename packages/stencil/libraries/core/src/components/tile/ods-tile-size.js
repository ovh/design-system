export var OdsTileSize;
(function (OdsTileSize) {
  OdsTileSize["sm"] = "sm";
  OdsTileSize["md"] = "md";
})(OdsTileSize || (OdsTileSize = {}));
export const OdsTileSizeList = Object.keys(OdsTileSize)
  .map((key) => OdsTileSize[key]);
