import { MESSAGE_COLOR, MESSAGE_EMPHASES, MESSAGE_STATUS, MESSAGE_STATUSES, Message, MessageBody, MessageIcon, type MessageEmphasis, type MessageStatus } from '../../src';

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

export const emphases = () => (
  <div style={{ display: 'flex', flexFlow: 'column', gap: '8px', alignItems: 'flex-start' }}>
    {
      MESSAGE_STATUSES.map((status) => (
        <div
          key={ status }
          style={{ display: 'flex', flexFlow: 'row', gap: '8px' }}>
          <Message
            data-testid={ `${status}-default` }
            status={ status }>
            <MessageIcon name="circle-info" />
            <MessageBody>{ status } default</MessageBody>
          </Message>

          {
            MESSAGE_EMPHASES.map((emphasis) => (
              <Message
                data-testid={ `${status}-${emphasis}` }
                emphasis={ emphasis }
                key={ emphasis }
                status={ status }>
                <MessageIcon name="circle-info" />
                <MessageBody>{ status } { emphasis }</MessageBody>
              </Message>
            ))
          }

          <Message
            data-testid={ `${status}-unknown` }
            emphasis={ 'critical' as MessageEmphasis }
            status={ status }>
            <MessageIcon name="circle-info" />
            <MessageBody>{ status } unknown</MessageBody>
          </Message>
        </div>
      ))
    }
  </div>
);
