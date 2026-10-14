enum MESSAGE_EMPHASIS {
  high = 'high',
  low = 'low',
  medium = 'medium',
}

type MessageEmphasis = `${MESSAGE_EMPHASIS}`;

const MESSAGE_EMPHASES = Object.freeze(Object.values(MESSAGE_EMPHASIS));

export {
  MESSAGE_EMPHASIS,
  MESSAGE_EMPHASES,
  type MessageEmphasis,
};
