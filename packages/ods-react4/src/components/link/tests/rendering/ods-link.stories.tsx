import { OdsLink } from '../../src';

export default {
  title: "Tests rendering",
  component: OdsLink,
};

export const customStyle = () => (
  <OdsLink
    data-testid="custom-style"
    label="Custom Style"
    style={{ color: '#00ff00' }} />
);

export const render = () => (
  <OdsLink
    data-testid="render"
    label="Render" />
);
