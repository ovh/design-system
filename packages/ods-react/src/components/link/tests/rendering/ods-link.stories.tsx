import { OdsLink } from '../../src';

export default {
  component: OdsLink,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsLink
    data-testid="custom-style"
    href="#"
    style={{ height: '42px' }}>
    Custom Style
  </OdsLink>
);

export const render = () => (
  <OdsLink
    data-testid="render"
    href="#">
    Render
  </OdsLink>
);
