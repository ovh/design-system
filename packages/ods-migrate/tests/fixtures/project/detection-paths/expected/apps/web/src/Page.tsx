import { BADGE_STATUS, Badge, StatusBanner } from '@acme/ui';

export const Page = () => (
  <>
    <Badge status={ BADGE_STATUS.accent }>New</Badge>
    <StatusBanner status="accent">Saved</StatusBanner>
  </>
);
