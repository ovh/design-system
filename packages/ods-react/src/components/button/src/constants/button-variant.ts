enum BUTTON_VARIANT {
  default = 'default',
  ghost = 'ghost',
  outline = 'outline',
}

type ButtonVariant =`${BUTTON_VARIANT}`;

const BUTTON_VARIANTS = Object.freeze(Object.values(BUTTON_VARIANT));

export {
  BUTTON_VARIANT,
  BUTTON_VARIANTS,
  type ButtonVariant,
};
