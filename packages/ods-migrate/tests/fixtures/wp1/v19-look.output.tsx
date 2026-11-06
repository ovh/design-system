import { BADGE_STATUS, Badge, Button, Card, Divider, Message, MessageBody, Spinner } from '@ovhcloud/ods-react';

export const Example = ({ variant }: { variant?: 'default' | 'ghost' }) => (
  <>
    <Button emphasis="high">Save</Button>
    <Button emphasis="medium">Edit</Button>
    <Button emphasis={ variant ?? 'high' }>Passed</Button>
    <Message emphasis="high"><MessageBody>Info</MessageBody></Message>
    <Card status="accent">Card</Card>
    <Badge status={ BADGE_STATUS.accent } emphasis="high">New</Badge>
    <Divider style={{ backgroundColor: 'var(--ods-semantic-color-interaction-neutral-hover)' }} />
    <Spinner style={{ fill: 'var(--ods-semantic-color-surface-neutral)' }} />
  </>
);
