import { BADGE_COLOR, Badge, StatusBanner } from '@acme/ui';

export const Page = () => (
  <>
    <Badge color={ BADGE_COLOR.primary }>New</Badge>
    <StatusBanner color="primary">Saved</StatusBanner>
  </>
);
