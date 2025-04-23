enum MESSAGE_VARIANT {
  default = 'default',
  light = 'light',
}

type MessageVariant =`${MESSAGE_VARIANT}`;

const MESSAGE_VARIANTS = Object.freeze(Object.values(MESSAGE_VARIANT));

export {
  MESSAGE_VARIANT,
  MESSAGE_VARIANTS,
  type MessageVariant,
};
