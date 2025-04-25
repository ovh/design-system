import type { ComponentPropsWithRef } from 'react';
import { Clipboard as VendorClipboard } from '@ark-ui/react/clipboard';
import classNames from 'classnames';
import { type FC, type JSX, forwardRef } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { INPUT_TYPE, Input, type InputProp } from '../../../../input/src';
import { TOOLTIP_POSITION, Tooltip, TooltipContent, TooltipTrigger } from '../../../../tooltip/src';
import style from './clipboard.module.scss';

interface ClipboardProp extends ComponentPropsWithRef<'input'> {
  maskOption?: InputProp['maskOption'],
  loading?: InputProp['loading'],
  type?: InputProp['type'],
  labelCopy?: string,
  labelCopySuccess?: string,
}

const Clipboard: FC<ClipboardProp> = forwardRef(({
  className,
  labelCopy = 'Copy to clipboard',
  labelCopySuccess = 'Copied!',
  value,
  ...props
}, ref): JSX.Element => {

  return (
    <VendorClipboard.Root
      className={ classNames(
        style['clipboard'],
        { [style['clipboard--disabled']]: props.disabled },
        className,
      ) }
      ref={ ref }
      value={ value?.toString() }>
      <VendorClipboard.Control asChild>
        <Input
          className={ style['clipboard__input'] }
          readOnly
          type={ INPUT_TYPE.text }
          value={ value }
          { ...props } />
      </VendorClipboard.Control>
      <Tooltip position={ TOOLTIP_POSITION.right }>
        <VendorClipboard.Trigger asChild>
          <VendorClipboard.Indicator
            className={ style['clipboard__copy'] }
            copied={
              <>
                <TooltipTrigger asChild>
                  <Button
                    disabled={ props.disabled }
                    size={ BUTTON_SIZE.xs }
                    variant={ BUTTON_VARIANT.ghost }
                  >
                    <Icon name={ ICON_NAME.fileCopy } />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className={ style['clipboard__tooltip-success'] }>
                  { labelCopySuccess }
                  <Icon
                    className={ style['clipboard__tooltip--success__check'] }
                    name={ ICON_NAME.check }
                  />

                </TooltipContent>
              </>
            }>
            <TooltipTrigger asChild>
              <Button
                disabled={ props.disabled }
                size={ BUTTON_SIZE.xs }
                variant={ BUTTON_VARIANT.ghost }
              >
                <Icon
                  name={ ICON_NAME.fileCopy } />
              </Button>
            </TooltipTrigger>
            { !props.disabled && <TooltipContent className={ style['clipboard__tooltip'] }>
              { labelCopy }
            </TooltipContent> }
          </VendorClipboard.Indicator>
        </VendorClipboard.Trigger>

      </Tooltip>
    </VendorClipboard.Root>
  );
});

Clipboard.displayName = 'Clipboard';

export {
  Clipboard,
  type ClipboardProp,
};
