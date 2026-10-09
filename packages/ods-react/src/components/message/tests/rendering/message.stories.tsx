import { MESSAGE_COLOR, MESSAGE_STATUS, MESSAGE_STATUSES, Message, MessageBody, MessageIcon, type MessageStatus } from '../../src';

export default {
  component: Message,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Message
    data-testid="custom-style"
    style={{ height: '42px' }}>
    <MessageBody>
      Custom Style
    </MessageBody>
  </Message>
);

export const render = () => (
  <Message data-testid="render">
    <MessageIcon name="xmark" />
    <MessageBody>
      Render
    </MessageBody>
  </Message>
);

export const deprecatedColor = () => (
  <>
    <Message color={ MESSAGE_COLOR.primary } data-testid="color-primary">
      <MessageBody>Primary</MessageBody>
    </Message>
    <Message data-testid="status-accent" status={ MESSAGE_STATUS.accent }>
      <MessageBody>Accent</MessageBody>
    </Message>
    <Message color={ MESSAGE_COLOR.critical } data-testid="color-critical-status-success" status={ MESSAGE_STATUS.success }>
      <MessageBody>Both</MessageBody>
    </Message>
    <Message data-testid="status-success" status={ MESSAGE_STATUS.success }>
      <MessageBody>Success</MessageBody>
    </Message>
  </>
);

export const statuses = () => (
  <>
    <Message
      data-testid="status-none"
      status={ 'none' as MessageStatus }>
      <MessageBody>None</MessageBody>
    </Message>

    {
      MESSAGE_STATUSES.map((status) => (
        <Message
          data-testid={ `status-${status}` }
          key={ status }
          status={ status }>
          <MessageBody>{ status }</MessageBody>
        </Message>
      ))
    }
  </>
);
