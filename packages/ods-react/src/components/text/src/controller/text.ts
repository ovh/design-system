import { TEXT_PRESET, type TextPreset } from '../constants/text-preset';

function getTag(preset: TextPreset): string {
  switch (preset) {
    case TEXT_PRESET.caption:
      return 'span';
    case TEXT_PRESET.code:
      return 'code';
    case TEXT_PRESET.heading1:
      return 'h1';
    case TEXT_PRESET.heading2:
      return 'h2';
    case TEXT_PRESET.heading3:
      return 'h3';
    case TEXT_PRESET.heading4:
      return 'h4';
    case TEXT_PRESET.heading5:
      return 'h5';
    case TEXT_PRESET.heading6:
      return 'h6';
    case TEXT_PRESET.label:
      return 'label';
    case TEXT_PRESET.paragraph:
      return 'p';
    case TEXT_PRESET.small:
      return 'small';
    case TEXT_PRESET.span:
      return 'span';
    default:
      return 'p';
  }
}

export {
  getTag,
};
