import { MESSAGE_COLORS, MESSAGE_VARIANTS, Message } from '.';
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
                { color }
              </Message>
            ))
          }
        </div>
      ))
    }
  </div>
);

export const CustomStyle = () => (
  <div style={{ maxWidth: '500px' }}>
    <Message
      className={ style['custom-message'] }>
      This is a message with custom styling applied through CSS modules
    </Message>
  </div>
);

export const Default = () => (
  <Message>
    Default message
  </Message>
);

export const Multiline = () => (
  <Message>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Message>
);

export const NonDismissible = () => (
  <Message dismissible={ false }>
    Default message
  </Message>
);

