import { OdsPopover } from '../../src';

export default {
  component: OdsPopover,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsPopover
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsPopover
    data-testid="render" />
);
