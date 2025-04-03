import { ODS_BADGE_SIZE, OdsBadge } from '../../src';

export default {
  component: OdsBadge,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsBadge
    data-testid="custom-style"
    style={{ height: '42px' }}>
    Custom Style
  </OdsBadge>
);

export const render = () => (
  <OdsBadge data-testid="render">
    Render
  </OdsBadge>
);

export const sizes = () => (
  <>
    <OdsBadge data-testid="size-sm" size={ ODS_BADGE_SIZE.sm }>SM</OdsBadge>
    <OdsBadge data-testid="size-md" size={ ODS_BADGE_SIZE.md }>MD</OdsBadge>
    <OdsBadge data-testid="size-lg" size={ ODS_BADGE_SIZE.lg }>LG</OdsBadge>
  </>
);
