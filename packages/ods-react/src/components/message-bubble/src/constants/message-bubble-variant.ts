enum MESSAGE_BUBBLE_VARIANT {
  ai = 'ai',
  human = 'human',
}

type MessageBubbleVariant = `${MESSAGE_BUBBLE_VARIANT}`;

const MESSAGE_BUBBLE_VARIANTS = Object.freeze(Object.values(MESSAGE_BUBBLE_VARIANT));

export {
  MESSAGE_BUBBLE_VARIANT,
  MESSAGE_BUBBLE_VARIANTS,
  type MessageBubbleVariant,
};
