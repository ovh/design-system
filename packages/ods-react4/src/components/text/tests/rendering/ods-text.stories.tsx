import { ODS_TEXT_PRESET, OdsText } from '../../src';

export default {
  title: "Tests rendering",
  component: OdsText,
};

export const PresetH1 = () => (
  <OdsText data-testid="preset-h1" preset={ ODS_TEXT_PRESET.heading1 }>Preset H1</OdsText>
);

export const PresetH2 = () => (
  <OdsText data-testid="preset-h2" preset={ ODS_TEXT_PRESET.heading2 }>Preset H2</OdsText>
);
