import { BADGE_STATUS, Badge, Button } from '@/ui/ods';

export const Page = () => (
  <>
    <Badge status={ BADGE_STATUS.accent }>New</Badge>
    <Button emphasis="low">Cancel</Button>
  </>
);
