import { Clipboard, useClipboardContext } from '@ark-ui/react/clipboard';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { TOOLTIP_POSITION, Tooltip, TooltipContent, TooltipTrigger } from '../../../../tooltip/src';
import { useClipboard } from '../../contexts/useClipboard';
import style from './clipboardTrigger.module.scss';

interface ClipboardTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * The initial tooltip label on copy button.
   */
  labelCopy?: string,
  /**
   * The tooltip label on copy button after a successful copy.
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
  const { disabled } = useClipboard();
  const { copied } = useClipboardContext();

  return (
    <Tooltip position={ TOOLTIP_POSITION.right }>
      <Clipboard.Trigger asChild>
        <TooltipTrigger
          aria-label={ copied ? labelCopySuccess : labelCopy }
          asChild
          className={ style['clipboard-trigger__copy'] }
          ref={ ref }
          { ...props }>
          {
            children
            || <Button
              disabled={ disabled }
              size={ BUTTON_SIZE.xs }
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.fileCopy } />
            </Button>
          }
        </TooltipTrigger>
      </Clipboard.Trigger>

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
                    aria-hidden="true"
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

export { ClipboardTrigger, type ClipboardTriggerProp };
