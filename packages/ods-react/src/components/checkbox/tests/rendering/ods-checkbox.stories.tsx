import { OdsCheckbox } from '../../src';

export default {
  component: OdsCheckbox,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsCheckbox
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsCheckbox data-testid="render" />
);
