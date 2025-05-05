import { Badge } from '.';
import style from './dev.module.css';

export default {
  component: Badge,
  title: 'Badge dev',
};

export const Default = () => (
  <Badge>
    Default
  </Badge>
);

export const CustomStyle = () => (
  <Badge className={ style['custom-badge'] }>
    Custom Styled Badge
  </Badge>
);
