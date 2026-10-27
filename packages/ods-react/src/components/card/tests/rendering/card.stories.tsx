import { CARD_STATUS, CARD_STATUSES, Card, type CardStatus } from '../../src';

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

export const statuses = () => (
  <>
    <Card data-testid="default">
      Default
    </Card>

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
