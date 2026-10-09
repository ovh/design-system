import { CARD_COLOR, CARD_STATUS, CARD_STATUSES, Card, type CardStatus } from '../../src';

export default {
  component: Card,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Card
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Card data-testid="render" />
);

export const deprecatedColor = () => (
  <>
    <Card color={ CARD_COLOR.primary } data-testid="color-primary">Primary</Card>
    <Card data-testid="status-accent" status={ CARD_STATUS.accent }>Accent</Card>
    <Card color={ CARD_COLOR.critical } data-testid="color-critical-status-success" status={ CARD_STATUS.success }>Both</Card>
    <Card data-testid="status-success" status={ CARD_STATUS.success }>Success</Card>
  </>
);

export const statuses = () => (
  <>
    <Card
      data-testid="status-none"
      status={ 'none' as CardStatus }>
      None
    </Card>

    {
      CARD_STATUSES.map((status) => (
        <Card
          data-testid={ `status-${status}` }
          key={ status }
          status={ status }>
          { status }
        </Card>
      ))
    }
  </>
);
