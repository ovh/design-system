import { BADGE_COLOR, BADGE_SIZE, BADGE_STATUS, BADGE_STATUSES, Badge, type BadgeStatus } from '../../src';

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

export const deprecatedColor = () => (
  <>
    <Badge color={ BADGE_COLOR.primary } data-testid="color-primary">Primary</Badge>
    <Badge data-testid="status-accent" status={ BADGE_STATUS.accent }>Accent</Badge>
    <Badge color={ BADGE_COLOR.critical } data-testid="color-critical-status-success" status={ BADGE_STATUS.success }>Both</Badge>
    <Badge data-testid="status-success" status={ BADGE_STATUS.success }>Success</Badge>
  </>
);

export const statuses = () => (
  <>
    <Badge
      data-testid="status-none"
      status={ 'none' as BadgeStatus }>
      None
    </Badge>

    {
      BADGE_STATUSES.map((status) => (
        <Badge
          data-testid={ `status-${status}` }
          key={ status }
          status={ status }>
          { status }
        </Badge>
      ))
    }
  </>
);
