enum ODS_TABLE_VARIANT {
  default = 'default',
  striped = 'striped',
}

type OdsTableVariant =`${ODS_TABLE_VARIANT}`;

const ODS_TABLE_VARIANTS = Object.freeze(Object.values(ODS_TABLE_VARIANT));

export {
  ODS_TABLE_VARIANT,
  ODS_TABLE_VARIANTS,
  type OdsTableVariant,
};
