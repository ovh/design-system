import { useState } from 'react';
import { MESSAGE_COLORS, MESSAGE_I18N, MESSAGE_VARIANTS, Message, MessageBody, MessageIcon } from '.';
import style from './dev.module.css';
import { Locale } from '../../../utils/locales';

export default {
  component: Message,
  title: 'Message dev',
};

export const A11Y = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [displayStatus, setDisplayStatus] = useState(false);

  return (
    <>
      <button onClick={ () => setDisplayAlert(true) } type="button">Display alert</button>
      <button onClick={ () => setDisplayStatus(true) } type="button">Display status</button>
      <br /><br />
      {
        displayAlert &&
        <Message color="critical" role="alert">
          <MessageIcon name="hexagon-exclamation" />

          <MessageBody >
            Some alert message
          </MessageBody>
        </Message>
      }
      <br /><br />
      {
        displayStatus &&
        <Message role="status">
          <MessageIcon name="circle-info" />

          <MessageBody>
            Some status message
          </MessageBody>
        </Message>
      }
    </>
  );
}

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

export const i18n = () => {
  const [locale, setLocale] = useState<Locale>('en');
  const [override, setOverride] = useState(Date.now().toString());

  return (
    <>
      <button onClick={ () => setLocale('fr') } type="button">Set locale to "fr"</button>
      <button onClick={ () => setLocale('en') } type="button">Set locale to "en"</button>
      {/*@ts-ignore for test purpose*/}
      <button onClick={ () => setLocale('zz') } type="button">Set locale to "zz"</button>
      <br /><br />
      <Message>
        <MessageBody>
          Default locale
        </MessageBody>
      </Message>
      <br /><br />
      <Message locale={ locale }>
        <MessageBody>
          Dynamic locale
        </MessageBody>
      </Message>
      <br /><br />
      <button onClick={ () => setOverride(Date.now().toString()) } type="button">Update override</button>
      <br /><br />
      <Message i18n={{ [MESSAGE_I18N.closeButton]: override }}>
        <MessageBody>
          Translation override
        </MessageBody>
      </Message>
    </>
  );
};

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

