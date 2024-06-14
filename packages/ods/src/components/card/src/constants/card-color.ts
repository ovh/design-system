enum ODS_CARD_COLOR {
  neutral = 'neutral',
  primary = 'primary',
}

type OdsCardColor = `${ODS_CARD_COLOR}`;

const ODS_CARD_COLORS = Object.freeze(Object.values(ODS_CARD_COLOR));

export {
  ODS_CARD_COLOR,
  ODS_CARD_COLORS,
  type OdsCardColor,
};