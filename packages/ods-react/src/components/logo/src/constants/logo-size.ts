enum LOGO_SIZE {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
}

type LogoSize =`${LOGO_SIZE}`;

const LOGO_SIZES = Object.freeze(Object.values(LOGO_SIZE));

export {
  LOGO_SIZE,
  LOGO_SIZES,
  type LogoSize,
};
