import { Badge, BADGE_COLOR, Divider } from '@ovhcloud/ods-react';

const tone = 'neutral' as const;

export function App() {
  return (
    <>
      <Badge color="primary">auto</Badge>
      <Divider color={ tone } />
    </>
  );
}

export function Shadow() {
  const colors = { primary: 'p' };
  return [BADGE_COLOR.primary, colors.primary];
}

export function Local() {
  const BADGE_COLOR = { primary: 'mine' };
  return BADGE_COLOR.primary;
}
