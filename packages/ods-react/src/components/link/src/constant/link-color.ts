enum LINK_COLOR {
  primary = 'primary',
}

type LinkColor =`${LINK_COLOR}`;

const LINK_COLORS = Object.freeze(Object.values(LINK_COLOR));

export {
  LINK_COLOR,
  LINK_COLORS,
  type LinkColor,
};
