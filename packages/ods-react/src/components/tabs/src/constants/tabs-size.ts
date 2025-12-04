enum TABS_SIZE {
  md = 'md',
  sm = 'sm',
  xs = 'xs',
}

type TabsSize =`${TABS_SIZE}`;

const TABS_SIZES = Object.freeze(Object.values(TABS_SIZE));

export {
  TABS_SIZE,
  TABS_SIZES,
  type TabsSize,
};
