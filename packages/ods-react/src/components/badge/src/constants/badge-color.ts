import { COLOR } from '../../../../utils/colors';

enum CUSTOM_BADGE_COLOR {
  alpha = 'alpha',
  beta = 'beta',
  new = 'new',
  promotion = 'promotion',
}

// TS does not support enum extends (see https://github.com/microsoft/TypeScript/issues/17592#issuecomment-1294079155)
const BADGE_COLOR = { ...COLOR, ...CUSTOM_BADGE_COLOR } as const;
type BADGE_COLOR = (typeof BADGE_COLOR)[keyof typeof BADGE_COLOR];

type BadgeColor = `${BADGE_COLOR}`;

const BADGE_COLORS = Object.freeze(Object.values(BADGE_COLOR));

export {
  BADGE_COLOR,
  BADGE_COLORS,
  type BadgeColor,
};
