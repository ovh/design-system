import { OdsBadge } from '../../src';

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
