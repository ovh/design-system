import { DIVIDER_COLOR, Divider } from '../../src';

export default {
  component: Divider,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Divider
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const deprecatedColor = () => (
  <>
    <Divider
      color={ DIVIDER_COLOR.neutral }
      data-testid="color-neutral" />

    <Divider
      color={ DIVIDER_COLOR.primary }
      data-testid="color-primary" />

    <Divider data-testid="default" />
  </>
);

export const render = () => (
  <Divider data-testid="render" />
);
