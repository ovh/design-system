enum TOAST_STATUS {
  accent = 'accent',
  critical = 'critical',
  information = 'information',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
}

type ToastStatus = `${TOAST_STATUS}`;

const TOAST_STATUSES = Object.freeze(Object.values(TOAST_STATUS));

export {
  TOAST_STATUS,
  TOAST_STATUSES,
  type ToastStatus,
};
