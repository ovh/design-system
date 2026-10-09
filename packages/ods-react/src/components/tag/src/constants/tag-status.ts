enum TAG_STATUS {
  accent = 'accent',
  critical = 'critical',
  information = 'information',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
}

type TagStatus = `${TAG_STATUS}`;

const TAG_STATUSES = Object.freeze(Object.values(TAG_STATUS));

export {
  TAG_STATUS,
  TAG_STATUSES,
  type TagStatus,
};
