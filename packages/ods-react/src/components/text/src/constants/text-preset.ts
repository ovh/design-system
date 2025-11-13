enum TEXT_PRESET {
  caption = 'caption',
  code = 'code',
  heading1 = 'heading-1',
  heading2 = 'heading-2',
  heading3 = 'heading-3',
  heading4 = 'heading-4',
  heading5 = 'heading-5',
  heading6 = 'heading-6',
  label = 'label',
  paragraph = 'paragraph',
  small = 'small',
  span = 'span',
}

type TextPreset = `${TEXT_PRESET}`;

const TEXT_PRESETS = Object.freeze(Object.values(TEXT_PRESET));

export {
  TEXT_PRESET,
  TEXT_PRESETS,
  type TextPreset,
};
