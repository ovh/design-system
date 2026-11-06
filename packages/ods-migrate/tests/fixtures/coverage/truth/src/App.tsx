import { Badge, BADGE_STATUS, Divider } from '@ovhcloud/ods-react';

const tone = 'neutral' as const;

export function App() {
  return (
    <>
      <Badge status="accent">auto</Badge>
      <Divider />
    </>
  );
}

export function Shadow() {
  const colors = { primary: 'p' };
  return [BADGE_STATUS.accent, colors.primary];
}

export function Local() {
  const BADGE_COLOR = { primary: 'mine' };
  return BADGE_COLOR.primary;
}
