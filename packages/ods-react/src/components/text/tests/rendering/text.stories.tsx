import { Text } from '../../src';

export default {
  component: Text,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Text
    data-testid="custom-style"
    style={{ color: 'rgb(255, 0, 0)' }}>
    Custom Style
  </Text>
);

export const render = () => (
  <Text
    data-testid="render">
    Render
  </Text>
);
