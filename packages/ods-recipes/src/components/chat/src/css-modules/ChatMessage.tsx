import { Avatar, BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button, Clipboard, ClipboardTrigger, FileThumbnail, ICON_NAME, Icon, MESSAGE_BUBBLE_VARIANT, MessageBubble, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import classNames from 'classnames';
import { type JSX } from 'react';
import { type Message } from './fakeApi';
import style from './index.module.scss';

const ChatMessage = ({ message, previousAuthor }: { message: Message, previousAuthor?: string }): JSX.Element => {
  const isAi = message.author === 'Assistant';

  return (
    <div className={ classNames(
      style['chat-message'],
      { [style['chat-message--human']]: !isAi },
    )}>
      {
        previousAuthor !== message.author &&
        <div className={ style['chat-message__info'] }>
          {
            isAi &&
            <Avatar>
              <Icon name={ ICON_NAME.sparkle } />
            </Avatar>
          }

          <span>
            { message.author }
          </span>

          {
            message.createdAt &&
            <Text preset={ TEXT_PRESET.small }>
              { message.createdAt.toLocaleString('en', { hour: 'numeric', minute: 'numeric' }) }
            </Text>
          }
        </div>
      }

      <MessageBubble
        className={ style['chat-message__bubble'] }
        typing={ message.processing }
        variant={ isAi ? MESSAGE_BUBBLE_VARIANT.ai : MESSAGE_BUBBLE_VARIANT.human }>
        {
          message.files && message.files?.length > 0 &&
          <div className={ style['chat-message__bubble__files'] }>
            {
              message.files.map((file, idx) => (
                <FileThumbnail
                  dismissible={ false }
                  file={ file }
                  key={ idx } />
              ))
            }
          </div>
        }

        {
          message.content &&
          <span className={ style['chat-message__bubble__content'] }>
            { message.content }
          </span>
        }
      </MessageBubble>

      {
        isAi &&
        <div className={ style['chat-message__actions'] }>
          <Button
            aria-label="Like"
            color={ BUTTON_COLOR.neutral }
            size={ BUTTON_SIZE.sm }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.thumbsUp } />
          </Button>

          <Button
            aria-label="Dislike"
            color={ BUTTON_COLOR.neutral }
            size={ BUTTON_SIZE.sm }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.thumbsDown } />
          </Button>

          <Clipboard
            className={ style['chat-message__actions__copy'] }
            value={ message.content }>
            <ClipboardTrigger className={ style['code__clipboard__trigger'] }>
              <Button
                className={ style['code__clipboard__trigger__button'] }
                color={ BUTTON_COLOR.neutral }
                size={ BUTTON_SIZE.sm }
                variant={ BUTTON_VARIANT.ghost }>
                <Icon name={ ICON_NAME.fileCopy } />
              </Button>
            </ClipboardTrigger>
          </Clipboard>
        </div>
      }
    </div>
  );
};

export {
  ChatMessage,
};
