enum ODS_TEXT_PRESET {
  paragraph = 'paragraph',
  'heading-1' = 'heading-1',
  'heading-2' = 'heading-2',
  'heading-3' = 'heading-3',
  'heading-4' = 'heading-4',
  'heading-5' = 'heading-5',
  'heading-6' = 'heading-6',
  span = 'span',
  code = 'code',
  label = 'label',
  caption = 'caption',
}

type OdsTextPreset = keyof typeof ODS_TEXT_PRESET;

const ODS_TEXT_PRESETS = Object.freeze(Object.values(ODS_TEXT_PRESET));

export {
  ODS_TEXT_PRESET,
  ODS_TEXT_PRESETS,
  type OdsTextPreset,
};
