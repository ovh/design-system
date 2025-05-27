enum DRAWER_POSITION {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top',
}

type DrawerPosition = `${DRAWER_POSITION}`;

const DRAWER_POSITIONS = Object.freeze(Object.values(DRAWER_POSITION));

export {
  DRAWER_POSITION,
  DRAWER_POSITIONS,
  type DrawerPosition,
};
