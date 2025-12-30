import { BUTTON_COLOR, BUTTON_SIZE, Button, ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import './index.module.css';

const StatusMessage = (): JSX.Element => {
  return (
    <Message color={ MESSAGE_COLOR.information }>
      <MessageIcon name={ ICON_NAME.circleInfo } />

      <MessageBody className="flex flex-col flex-nowrap gap-y-[var(--ods-theme-row-gap)]">
        <div className="flex flex-col flex-nowrap gap-y-[calc(var(--ods-theme-row-gap)_/_2)]">
          <span className="font-[700]">
            Activate your project and get €200 in free cloud credit
          </span>

          <p className="m-0">
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
