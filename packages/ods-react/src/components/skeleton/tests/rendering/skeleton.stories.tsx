import { Skeleton } from '../../src';

export default {
  component: Skeleton,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Skeleton
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Skeleton data-testid="render" />
);
