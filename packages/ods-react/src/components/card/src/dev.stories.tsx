import { Card } from '.';
import style from './dev.module.css';

export default {
  component: Card,
  title: 'Card dev',
};

export const Default = () => (
  <Card />
);

export const CustomStyle = () => (
  <Card className={ style['custom-card'] }>
    <div style={{ textAlign: 'center' }}>
      <h3>Card with Custom Styling</h3>
      <p>This card has custom styles applied via CSS modules</p>
    </div>
  </Card>
);
