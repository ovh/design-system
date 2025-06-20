import { Clipboard } from '@ark-ui/react/clipboard';
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
  className,
  children,
  labelCopy = 'Copy to clipboard',
  labelCopySuccess = 'Copied!',
  ...props
}, ref): JSX.Element => {
  const { disabled } = useClipboard();

  const defaultButton = (
    <Button
      disabled={disabled}
      size={BUTTON_SIZE.xs}
      variant={BUTTON_VARIANT.ghost}
    >
      <Icon name={ICON_NAME.fileCopy} />
    </Button>
  );

  const triggerContent = children || defaultButton;

  return (
    <Tooltip position={ TOOLTIP_POSITION.right }>
      <Clipboard.Trigger asChild>
        <Clipboard.Indicator
          className={ style[ 'clipboard__copy' ] }
          copied={
            <>
              <TooltipTrigger
                asChild
                ref={ ref }
                { ...props }>
                { triggerContent }
              </TooltipTrigger>

              <TooltipContent className={ classNames(style[ 'clipboard__tooltip-success' ], className) }>
                { labelCopySuccess }
                <Icon
                  className={ style[ 'clipboard__tooltip-success__check' ] }
                  name={ ICON_NAME.check } />
              </TooltipContent>
            </>
          }>
          <TooltipTrigger
            asChild
            ref={ ref }
            { ...props }>
            { triggerContent }
          </TooltipTrigger>

          {
            !disabled &&
            <TooltipContent className={ classNames(style[ 'clipboard__tooltip' ], className) }>
              { labelCopy }
            </TooltipContent>
          }
        </Clipboard.Indicator>
      </Clipboard.Trigger>
    </Tooltip>
  );
});

ClipboardTrigger.displayName = 'ClipboardTrigger';

export { ClipboardTrigger, type ClipboardTriggerProp };
