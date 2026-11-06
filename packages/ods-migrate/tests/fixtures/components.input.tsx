import { BUTTON_COLOR, Button, CARD_COLOR, Card, type ButtonColor, MESSAGE_COLOR, Message, MessageBody, TAG_COLORS, Tag } from '@ovhcloud/ods-react';

const ACTION_COLORS: Record<string, ButtonColor> = { save: 'primary', notify: 'success' };

export const Example = ({ isDanger }: { isDanger: boolean }) => (
  <>
    <Button color="primary">Save</Button>
    <Button color={ isDanger ? BUTTON_COLOR.critical : BUTTON_COLOR.primary }>Maybe</Button>
    <Button color="success">Validate</Button>
    <Button color={ BUTTON_COLOR.warning }>Careful</Button>
    <Card color={ CARD_COLOR.primary }>Card</Card>
    <Message color="primary"><MessageBody>Info</MessageBody></Message>
    <Message color={ MESSAGE_COLOR.critical }><MessageBody>Error</MessageBody></Message>
    { TAG_COLORS.map((color) => <Tag color={ color } key={ color }>{ color }</Tag>) }
  </>
);

export { ACTION_COLORS };
