enum ODS_TEXT_PRESET {
  caption = 'caption',
  code = 'code',
  heading1 = 'heading-1',
  heading2 = 'heading-2',
  heading3 = 'heading-3',
  heading4 = 'heading-4',
  heading5 = 'heading-5',
  heading6 = 'heading-6',
  paragraph = 'paragraph',
  span = 'span',
}

type OdsTextPreset = `${ODS_TEXT_PRESET}`;

const ODS_TEXT_PRESETS = Object.freeze(Object.values(ODS_TEXT_PRESET));

export {
  ODS_TEXT_PRESET,
  ODS_TEXT_PRESETS,
  type OdsTextPreset,
};
