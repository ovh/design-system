enum CARD_COLOR {
  neutral = 'neutral',
  primary = 'primary',
}

type CardColor = `${CARD_COLOR}`;

const CARD_COLORS = Object.freeze(Object.values(CARD_COLOR));

export {
  CARD_COLOR,
  CARD_COLORS,
  type CardColor,
};
