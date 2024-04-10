enum ODS_TAG_VARIANT {
  default = 'default',
  outline = 'outline',
}

type OdsTagVariant =`${ODS_TAG_VARIANT}`;

const ODS_TAG_VARIANTS = Object.freeze(Object.values(ODS_TAG_VARIANT));

export {
  ODS_TAG_VARIANT,
  ODS_TAG_VARIANTS,
  type OdsTagVariant,
};
