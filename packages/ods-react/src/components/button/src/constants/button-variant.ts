/**
 * @deprecated
 * Use BUTTON_EMPHASIS instead, removed in v21.
 */
enum BUTTON_VARIANT {
  default = 'default',
  ghost = 'ghost',
  outline = 'outline',
}

/**
 * @deprecated
 * Use ButtonEmphasis instead, removed in v21.
 */
type ButtonVariant =`${BUTTON_VARIANT}`;

/**
 * @deprecated
 * Use BUTTON_EMPHASES instead, removed in v21.
 */
const BUTTON_VARIANTS = Object.freeze(Object.values(BUTTON_VARIANT));

export {
  BUTTON_VARIANT,
  BUTTON_VARIANTS,
  type ButtonVariant,
};
