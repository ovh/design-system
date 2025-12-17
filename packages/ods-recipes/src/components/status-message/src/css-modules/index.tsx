import { BUTTON_COLOR, BUTTON_SIZE, Button, ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import style from './index.module.scss';

const StatusMessage = (): JSX.Element => {
  return (
    <Message color={ MESSAGE_COLOR.information }>
      <MessageIcon name={ ICON_NAME.circleInfo } />

      <MessageBody className={ style['status-message__body'] }>
        <div className={ style['status-message__body__content'] }>
          <span className={ style['status-message__body__content__title'] }>
            Activate your project and get €200 in free cloud credit
          </span>

          <p className={ style['status-message__body__content__message'] }>
            You are currently in discovery mode. Activate your project to unlock your cloud resources and start building in minutes.
          </p>
        </div>

        <div>
          <Button
            color={ BUTTON_COLOR.primary }
            size={ BUTTON_SIZE.xs }>
            Activate
          </Button>
        </div>
      </MessageBody>
    </Message>
  );
};

export {
  StatusMessage,
};
