import { BADGE_COLORS, BADGE_SIZES, Badge } from '.';
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

export const Sizes = () => (
  <div style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
    {
      BADGE_SIZES.map((size) => (
        <Badge
          style={{ alignSelf: 'center' }}
          key={ size }
          size={ size }>
          Badge - { size }
        </Badge>
      ))
    }
  </div>
);
