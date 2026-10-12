import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import { resolveValue } from 'react-hot-toast/headless';
import { MESSAGE_VARIANT, Message, MessageBody, MessageIcon } from '../../../../message/src';
import { type Toast as ToastItem, useToaster } from '../../contexts/useToaster';
import { toast as controller, getToastStatus } from '../../controller/toaster';
import style from './toast.module.scss';

interface ToastProp {
  toast: ToastItem,
}

const Toast: FC<ToastProp> = ({
  toast,
}): JSX.Element => {
  const { dismissible } = useToaster();

  return (
    <Message
      className={ classNames(style['toast'], toast.className) }
      dismissible={ typeof toast.dismissible === 'boolean' ? toast.dismissible : dismissible }
      onRemove={ () => controller.remove(toast.id) }
      status={ getToastStatus(toast) }
      variant={ MESSAGE_VARIANT.light }>
      {
        toast.icon &&
        <MessageIcon name={ toast.icon } />
      }

      <MessageBody>
        { resolveValue(toast.message, toast) }
      </MessageBody>
    </Message>
  );
};

Toast.displayName = 'Toast';

export {
  Toast,
  type ToastProp,
};
