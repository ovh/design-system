enum LOGO_VARIANT {
  default = 'default',
  emblem = 'emblem',
}

type LogoVariant =`${LOGO_VARIANT}`;

const LOGO_VARIANTS = Object.freeze(Object.values(LOGO_VARIANT));

export {
  LOGO_VARIANT,
  LOGO_VARIANTS,
  type LogoVariant,
};
