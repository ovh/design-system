import { BUTTON_EMPHASIS, BUTTON_SIZE, BUTTON_STATUS, Button, ICON_NAME, MESSAGE_STATUS, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import style from './index.module.scss';

const StatusMessage = (): JSX.Element => {
  return (
    <Message status={ MESSAGE_STATUS.information }>
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
            emphasis={ BUTTON_EMPHASIS.high }
            status={ BUTTON_STATUS.brand }
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
