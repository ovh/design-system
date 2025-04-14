import { BADGE_SIZE, Badge } from '../../src';

export default {
  component: Badge,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Badge
    data-testid="custom-style"
    style={{ height: '42px' }}>
    Custom Style
  </Badge>
);

export const render = () => (
  <Badge data-testid="render">
    Render
  </Badge>
);

export const sizes = () => (
  <>
    <Badge data-testid="size-sm" size={ BADGE_SIZE.sm }>SM</Badge>
    <Badge data-testid="size-md" size={ BADGE_SIZE.md }>MD</Badge>
    <Badge data-testid="size-lg" size={ BADGE_SIZE.lg }>LG</Badge>
  </>
);
