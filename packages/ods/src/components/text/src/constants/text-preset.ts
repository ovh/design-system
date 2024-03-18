enum ODS_TEXT_PRESET {
  paragraph = 'paragraph',
  heading1 = 'heading-1',
  heading2 = 'heading-2',
  heading3 = 'heading-3',
  heading4 = 'heading-4',
  heading5 = 'heading-5',
  heading6 = 'heading-6',
  span = 'span',
  code = 'code',
  label = 'label',
  caption = 'caption',
}

type OdsTextPreset = `${ODS_TEXT_PRESET}`;

const ODS_TEXT_PRESETS = Object.freeze(Object.values(ODS_TEXT_PRESET));

export {
  ODS_TEXT_PRESET,
  ODS_TEXT_PRESETS,
  type OdsTextPreset,
};
