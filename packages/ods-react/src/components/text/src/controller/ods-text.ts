import { ODS_TEXT_PRESET, type OdsTextPreset } from '../constants/text-preset';

function getTag(preset: OdsTextPreset): string {
  switch (preset) {
    case ODS_TEXT_PRESET.caption:
      return 'span';
    case ODS_TEXT_PRESET.code:
      return 'code';
    case ODS_TEXT_PRESET.heading1:
      return 'h1';
    case ODS_TEXT_PRESET.heading2:
      return 'h2';
    case ODS_TEXT_PRESET.heading3:
      return 'h3';
    case ODS_TEXT_PRESET.heading4:
      return 'h4';
    case ODS_TEXT_PRESET.heading5:
      return 'h5';
    case ODS_TEXT_PRESET.heading6:
      return 'h6';
    case ODS_TEXT_PRESET.label:
      return 'label';
    case ODS_TEXT_PRESET.paragraph:
      return 'p';
    case ODS_TEXT_PRESET.span:
      return 'span';
    default:
      return 'p';
  }
}

export {
  getTag,
};
