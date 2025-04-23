enum MESSAGE_COLOR {
  critical = 'critical',
  danger = 'danger',
  information = 'information',
  success = 'success',
  warning = 'warning',
}

type MessageColor =`${MESSAGE_COLOR}`;

const MESSAGE_COLORS = Object.freeze(Object.values(MESSAGE_COLOR));

export {
  MESSAGE_COLOR,
  MESSAGE_COLORS,
  type MessageColor,
};
