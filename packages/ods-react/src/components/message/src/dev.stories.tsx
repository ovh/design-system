import { MESSAGE_COLOR, MESSAGE_VARIANT, Message } from '.';

export default {
  component: Message,
  title: 'Message dev',
};

export const Default = () => (
  <Message>
    Default message
  </Message>
);

export const ColorsAndVariants = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'max-content max-content', gap: '8px' }}>
    <Message
      color={ MESSAGE_COLOR.critical }
      variant={ MESSAGE_VARIANT.default }>
      Critical default
    </Message>

    <Message
      color={ MESSAGE_COLOR.critical }
      variant={ MESSAGE_VARIANT.light }>
      Critical light
    </Message>

    <Message
      color={ MESSAGE_COLOR.danger }
      variant={ MESSAGE_VARIANT.default }>
      Danger default
    </Message>

    <Message
      color={ MESSAGE_COLOR.danger }
      variant={ MESSAGE_VARIANT.light }>
      Danger light
    </Message>

    <Message
      color={ MESSAGE_COLOR.information }
      variant={ MESSAGE_VARIANT.default }>
      Information default
    </Message>

    <Message
      color={ MESSAGE_COLOR.information }
      variant={ MESSAGE_VARIANT.light }>
      Information light
    </Message>

    <Message
      color={ MESSAGE_COLOR.success }
      variant={ MESSAGE_VARIANT.default }>
      Success default
    </Message>

    <Message
      color={ MESSAGE_COLOR.success }
      variant={ MESSAGE_VARIANT.light }>
      Success light
    </Message>

    <Message
      color={ MESSAGE_COLOR.warning }
      variant={ MESSAGE_VARIANT.default }>
      Warning default
    </Message>

    <Message
      color={ MESSAGE_COLOR.warning }
      variant={ MESSAGE_VARIANT.light }>
      Warning light
    </Message>
  </div>
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
