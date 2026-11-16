import { Clipboard, useClipboardContext } from '@ark-ui/react/clipboard';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_EMPHASIS, BUTTON_SIZE, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { TOOLTIP_POSITION, Tooltip, TooltipContent, TooltipTrigger } from '../../../../tooltip/src';
import { VisuallyHidden } from '../../../../visually-hidden/src';
import { useClipboard } from '../../contexts/useClipboard';
import style from './clipboardTrigger.module.scss';

interface ClipboardTriggerProp extends Omit<ComponentPropsWithRef<'button'>, 'value'> {
  value?: string,
  /**
   * The initial tooltip label on copy button.
   */
  labelCopy?: string,
  /**
   * The tooltip label on copy button after a successful copy, also announced to screen readers.
   */
  labelCopySuccess?: string,
}

const ClipboardTrigger: FC<ClipboardTriggerProp> = forwardRef(({
  children,
  className,
  labelCopy = 'Copy to clipboard',
  labelCopySuccess = 'Copied!',
  ...props
}, ref): JSX.Element => {
  const { disabled, positionerStyle } = useClipboard();
  const { copied } = useClipboardContext();

  return (
    <Tooltip
      overlayConfig={{
        position: TOOLTIP_POSITION.right,
      }}
      positionerStyle={ positionerStyle }>
      <Clipboard.Trigger asChild>
        <TooltipTrigger
          aria-label={ labelCopy }
          asChild
          className={ style['clipboard-trigger__copy'] }
          data-ods="clipboard-trigger"
          ref={ ref }
          { ...props }>
          {
            children
            || <Button
              disabled={ disabled }
              emphasis={ BUTTON_EMPHASIS.low }
              size={ BUTTON_SIZE.xs }>
              <Icon name={ ICON_NAME.fileCopy } />
            </Button>
          }
        </TooltipTrigger>
      </Clipboard.Trigger>

      {/* Announces the copy without moving focus. The trigger keeps its name: renaming the focused
          button too would make NVDA read the success twice. */}
      <VisuallyHidden role="status">
        { copied && labelCopySuccess }
      </VisuallyHidden>

      {
        !disabled &&
        <TooltipContent>
          <div
            aria-hidden="true"
            className={ classNames(
              style['clipboard-trigger__tooltip'],
              { [style['clipboard-trigger__tooltip--success']]: copied },
              className,
            )}>
            {
              copied
                ? <>
                  { labelCopySuccess }
                  <Icon
                    className={ style['clipboard-trigger__tooltip__check'] }
                    name={ ICON_NAME.check } />
                </> : labelCopy
            }
          </div>
        </TooltipContent>
      }
    </Tooltip>
  );
});

ClipboardTrigger.displayName = 'ClipboardTrigger';

export {
  ClipboardTrigger,
  type ClipboardTriggerProp,
};
