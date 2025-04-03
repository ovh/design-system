import { OdsText } from '../../src';

export default {
  component: OdsText,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsText
    data-testid="custom-style"
    style={{ color: 'rgb(255, 0, 0)' }}>
    Custom Style
  </OdsText>
);

export const render = () => (
  <OdsText
    data-testid="render">
    Render
  </OdsText>
);
