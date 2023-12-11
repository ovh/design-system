enum ODS_TILE_VARIANT {
  flat = 'flat',
  stroked = 'stroked',
  ghost = 'ghost',
  hollow = 'hollow'
}

const ODS_TILE_VARIANTS = Object.freeze(Object.values(ODS_TILE_VARIANT));

export {
  ODS_TILE_VARIANT,
  ODS_TILE_VARIANTS,
};
