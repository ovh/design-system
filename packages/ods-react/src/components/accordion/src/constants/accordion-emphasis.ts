enum ACCORDION_EMPHASIS {
  high = 'high',
  low = 'low',
  medium = 'medium',
}

type AccordionEmphasis = `${ACCORDION_EMPHASIS}`;

const ACCORDION_EMPHASES = Object.freeze(Object.values(ACCORDION_EMPHASIS));

export {
  ACCORDION_EMPHASIS,
  ACCORDION_EMPHASES,
  type AccordionEmphasis,
};
