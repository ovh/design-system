import style from './dev.module.css';
import { CARD_STATUSES, Card } from '.';

export default {
  component: Card,
  title: 'Card dev',
};

export const Statuses = () => (
  <div style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
    {
      CARD_STATUSES.map((status) => (
        <Card
          key={ status }
          status={ status }
          style={{ padding: '8px' }}>
          { status }
        </Card>
      ))
    }
  </div>
);

export const CustomStyle = () => (
  <Card className={ style['custom-card'] }>
    <div style={{ textAlign: 'center' }}>
      <h3>Card with Custom Styling</h3>
      <p>This card has custom styles applied via CSS modules</p>
    </div>
  </Card>
);

export const Default = () => (
  <Card>
    Default Card
  </Card>
);
