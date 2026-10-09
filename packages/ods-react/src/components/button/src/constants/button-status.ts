enum BUTTON_STATUS {
  brand = 'brand',
  critical = 'critical',
  neutral = 'neutral',
}

type ButtonStatus = `${BUTTON_STATUS}`;

const BUTTON_STATUSES = Object.freeze(Object.values(BUTTON_STATUS));

export {
  BUTTON_STATUS,
  BUTTON_STATUSES,
  type ButtonStatus,
};
