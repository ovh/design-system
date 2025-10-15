import { CARD_COLORS, Card } from '.';
import style from './dev.module.css';

export default {
  component: Card,
  title: 'Card dev',
};

export const Colors = () => (
  <div style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
    {
      CARD_COLORS.map((color) => (
        <Card
          color={ color }
          style={{ padding: '8px' }}
          key={ color }>
          { color }
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
