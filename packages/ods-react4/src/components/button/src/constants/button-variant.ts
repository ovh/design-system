enum ODS_BUTTON_VARIANT {
  default = 'default',
  ghost = 'ghost',
  outline = 'outline',
}

type OdsButtonVariant =`${ODS_BUTTON_VARIANT}`;

const ODS_BUTTON_VARIANTS = Object.freeze(Object.values(ODS_BUTTON_VARIANT));

export {
  ODS_BUTTON_VARIANT,
  ODS_BUTTON_VARIANTS,
  type OdsButtonVariant,
};
