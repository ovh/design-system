enum MODAL_COLOR {
  critical = 'critical',
  information = 'information',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
}

type ModalColor =`${MODAL_COLOR}`;

const MODAL_COLORS = Object.freeze(Object.values(MODAL_COLOR));

export {
  MODAL_COLOR,
  MODAL_COLORS,
  type ModalColor,
};
