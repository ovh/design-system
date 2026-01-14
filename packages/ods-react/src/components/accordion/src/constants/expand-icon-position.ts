enum EXPAND_ICON_POSITION {
  left = 'left',
  right = 'right',
}

type ExpandIconPosition =`${EXPAND_ICON_POSITION}`;

const EXPAND_ICON_POSITIONS = Object.freeze(Object.values(EXPAND_ICON_POSITION));

export {
  EXPAND_ICON_POSITION,
  EXPAND_ICON_POSITIONS,
  type ExpandIconPosition,
};
