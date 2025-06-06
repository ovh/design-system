import { MESSAGE_COLORS, MESSAGE_VARIANTS, Message, MessageBody, MessageIcon } from '.';
import style from './dev.module.css';

export default {
  component: Message,
  title: 'Message dev',
};

export const Colors = () => (
  <div style={{ display: 'flex', flexFlow: 'column', rowGap: '8px' }}>
    {
      MESSAGE_VARIANTS.map((variant) => (
        <div
          key={ variant }
          style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
          {
            MESSAGE_COLORS.map((color) => (
              <Message
                color={ color }
                key={ color }
                variant={ variant }>
                <MessageIcon name="circle-info" />

                <MessageBody>
                  { color }
                </MessageBody>
              </Message>
            ))
          }
        </div>
      ))
    }

    {
      MESSAGE_VARIANTS.map((variant) => (
        <div
          key={ variant }
          style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
          {
            MESSAGE_COLORS.map((color) => (
              <Message
                color={ color }
                key={ color }
                variant={ variant }>
                <MessageBody>
                  { color }
                </MessageBody>
              </Message>
            ))
          }
        </div>
      ))
    }
  </div>
);

export const CustomStyle = () => (
  <Message className={ style['custom-message'] }>
    <MessageIcon
      className={ style['custom-message-icon'] }
      name="circle-info" />

    <MessageBody className={ style['custom-message-body'] }>
      This is a message with custom styling applied through CSS modules
    </MessageBody>
  </Message>
);

export const Default = () => (
  <Message>
    <MessageBody>
      Default message
    </MessageBody>
  </Message>
);

export const Icon = () => (
  <Message>
    <MessageIcon name="circle-info" />

    <MessageBody>
      Default message
    </MessageBody>
  </Message>
);

export const Multiline = () => (
  <>
    <Message>
      <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </MessageBody>
    </Message>

    <br /><br />

    <Message>
      <MessageIcon name="circle-info" />

      <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </MessageBody>
    </Message>
  </>
);

export const NonDismissible = () => (
  <>
    <Message dismissible={ false }>
      <MessageBody>
        Default message
      </MessageBody>
    </Message>

    <br /><br />

    <Message dismissible={ false }>
      <MessageIcon name="circle-info" />

      <MessageBody>
        Default message
      </MessageBody>
    </Message>
  </>
);

