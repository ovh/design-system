import { BADGE_COLORS, Badge } from '.';
import style from './dev.module.css';

export default {
  component: Badge,
  title: 'Badge dev',
};

export const Colors = () => (
  <div style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
    {
      BADGE_COLORS.map((color) => (
        <Badge
          color={ color }
          key={ color }>
          { color }
        </Badge>
      ))
    }
  </div>
);

export const CustomStyle = () => (
  <Badge className={ style['custom-badge'] }>
    Custom Styled Badge
  </Badge>
);

export const Default = () => (
  <Badge>
    Default
  </Badge>
);
