import { OdsButton } from '../../src';

export default {
  component: OdsButton,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsButton
    data-testid="custom-style"
    style={{ height: '42px' }}>
    Custom style
  </OdsButton>
);

export const render = () => (
  <OdsButton
    data-testid="render">
    Render
  </OdsButton>
);
