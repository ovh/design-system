enum TABS_VARIANT {
  default = 'default',
  switch = 'switch',
}

type TabsVariant =`${TABS_VARIANT}`;

const TABS_VARIANTS = Object.freeze(Object.values(TABS_VARIANT));

export {
  TABS_VARIANT,
  TABS_VARIANTS,
  type TabsVariant,
};
