enum CHECKBOX_VARIANT {
  default = 'default',
  tile = 'tile',
}

type CheckboxVariant =`${CHECKBOX_VARIANT}`;

const CHECKBOX_VARIANTS = Object.freeze(Object.values(CHECKBOX_VARIANT));

export {
  CHECKBOX_VARIANT,
  CHECKBOX_VARIANTS,
  type CheckboxVariant,
};
