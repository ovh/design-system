enum MESSAGE_STATUS {
  accent = 'accent',
  critical = 'critical',
  information = 'information',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
}

type MessageStatus = `${MESSAGE_STATUS}`;

const MESSAGE_STATUSES = Object.freeze(Object.values(MESSAGE_STATUS));

export {
  MESSAGE_STATUS,
  MESSAGE_STATUSES,
  type MessageStatus,
};
