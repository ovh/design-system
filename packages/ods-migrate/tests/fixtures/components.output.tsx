import { BUTTON_STATUS, Button, CARD_STATUS, Card, type ButtonStatus, MESSAGE_STATUS, Message, MessageBody, TAG_STATUSES, Tag } from '@ovhcloud/ods-react';

const ACTION_COLORS: Record<string, ButtonStatus> = { save: 'brand', notify: /* TODO(ods-v20): 'success' (ButtonColor) has no v20 equivalent: a Button shows no status in v20: pick `status` brand, neutral or critical (brand is the default), and show the status with a Badge or a Message next to it */ 'success' };

export const Example = ({ isDanger }: { isDanger: boolean }) => (
  <>
    <Button>Save</Button>
    <Button status={ isDanger ? BUTTON_STATUS.critical : BUTTON_STATUS.brand }>Maybe</Button>
    {/* TODO(ods-v20): <Button color="success"> has no v20 equivalent: a Button shows no status in v20: pick `status` brand, neutral or critical (brand is the default), and show the status with a Badge or a Message next to it */}
    <Button>Validate</Button>
    {/* TODO(ods-v20): BUTTON_COLOR.warning has no v20 equivalent: a Button shows no status in v20: pick `status` brand, neutral or critical (brand is the default), and show the status with a Badge or a Message next to it */}
    <Button>Careful</Button>
    <Card status={ CARD_STATUS.accent }>Card</Card>
    <Message status="accent"><MessageBody>Info</MessageBody></Message>
    <Message status={ MESSAGE_STATUS.critical }><MessageBody>Error</MessageBody></Message>
    { TAG_STATUSES.map((color) => <Tag status={ color } key={ color }>{ color }</Tag>) }
  </>
);

export { ACTION_COLORS };
