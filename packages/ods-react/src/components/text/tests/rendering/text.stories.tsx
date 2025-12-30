import { TEXT_PRESET, Text } from '../../src';

export default {
  component: Text,
  title: 'Tests rendering',
};

export const CustomStyle = () => (
  <Text style={{ color: 'rgb(255, 0, 0)' }}>
    Custom Style
  </Text>
);

export const CustomTag = () => (
  <Text
    preset={ TEXT_PRESET.heading3 }
    as="span">
    Should render a span
  </Text>
);

export const Render = () => (
  <Text>
    Render
  </Text>
);
