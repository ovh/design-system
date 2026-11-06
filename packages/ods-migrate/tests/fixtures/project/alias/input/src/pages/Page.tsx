import { BADGE_COLOR, Badge, Button } from '@/ui/ods';

export const Page = () => (
  <>
    <Badge color={ BADGE_COLOR.primary }>New</Badge>
    <Button variant="ghost">Cancel</Button>
  </>
);
