import { OdsSkeleton } from '../../src';

export default {
  component: OdsSkeleton,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsSkeleton
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsSkeleton data-testid="render" />
);
