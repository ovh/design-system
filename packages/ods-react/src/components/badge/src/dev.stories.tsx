import style from './dev.module.css';
import { BADGE_EMPHASES, BADGE_SIZES, BADGE_STATUSES, Badge } from '.';

export default {
  component: Badge,
  title: 'Badge dev',
};

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

export const Emphases = () => (
  <div style={{ display: 'flex', flexFlow: 'column', rowGap: '8px' }}>
    {
      BADGE_EMPHASES.map((emphasis) => (
        <div
          key={ emphasis }
          style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
          {
            BADGE_STATUSES.map((status) => (
              <Badge
                emphasis={ emphasis }
                key={ status }
                status={ status }>
                { emphasis } { status }
              </Badge>
            ))
          }
        </div>
      ))
    }
  </div>
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

export const Statuses = () => (
  <div style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
    {
      BADGE_STATUSES.map((status) => (
        <Badge
          key={ status }
          status={ status }>
          { status }
        </Badge>
      ))
    }
  </div>
);
