enum ODS_MESSAGE_VARIANT {
  default = 'default',
  light = 'light',
}

type OdsMessageVariant =`${ODS_MESSAGE_VARIANT}`;

const ODS_MESSAGE_VARIANTS = Object.freeze(Object.values(ODS_MESSAGE_VARIANT));

export {
  ODS_MESSAGE_VARIANT,
  ODS_MESSAGE_VARIANTS,
  type OdsMessageVariant,
};
