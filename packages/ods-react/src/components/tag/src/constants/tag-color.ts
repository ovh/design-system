enum TAG_COLOR {
  critical = 'critical',
  information = 'information',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
}

type TagColor = `${TAG_COLOR}`;

const TAG_COLORS = Object.freeze(Object.values(TAG_COLOR));

export {
  TAG_COLOR,
  TAG_COLORS,
  type TagColor,
};
