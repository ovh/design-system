import { BADGE_COLOR, Badge, Button, Card, Divider, Message, MessageBody, Spinner } from '@ovhcloud/ods-react';

export const Example = ({ variant }: { variant?: 'default' | 'ghost' }) => (
  <>
    <Button>Save</Button>
    <Button variant="outline">Edit</Button>
    <Button variant={ variant }>Passed</Button>
    <Message><MessageBody>Info</MessageBody></Message>
    <Card>Card</Card>
    <Badge color={ BADGE_COLOR.primary }>New</Badge>
    <Divider color="neutral" />
    <Spinner color="neutral" />
  </>
);
