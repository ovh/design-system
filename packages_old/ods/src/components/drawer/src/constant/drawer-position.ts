enum ODS_DRAWER_POSITION {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top',
}

type OdsDrawerPosition = `${ODS_DRAWER_POSITION}`;

const ODS_DRAWER_POSITIONS = Object.freeze(Object.values(ODS_DRAWER_POSITION));

export {
  ODS_DRAWER_POSITION,
  ODS_DRAWER_POSITIONS,
  type OdsDrawerPosition,
};
