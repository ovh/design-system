enum CARD_STATUS {
  accent = 'accent',
  critical = 'critical',
  information = 'information',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
}

type CardStatus = `${CARD_STATUS}`;

const CARD_STATUSES = Object.freeze(Object.values(CARD_STATUS));

export {
  CARD_STATUS,
  CARD_STATUSES,
  type CardStatus,
};
