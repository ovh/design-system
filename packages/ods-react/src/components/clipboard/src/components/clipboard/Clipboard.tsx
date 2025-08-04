import { Clipboard as VendorClipboard } from '@ark-ui/react/clipboard';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ClipboardProvider, type ClipboardRootProp } from '../../contexts/useClipboard';
import style from './clipboard.module.scss';

interface ClipboardProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue' | 'onCopy'>, ClipboardRootProp {}

const Clipboard: FC<ClipboardProp> = forwardRef(({
  children,
  className,
  disabled,
  i18n,
  locale,
  onCopy,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <ClipboardProvider
      disabled={ disabled }
      i18n={ i18n }
      locale={ locale }>
      <VendorClipboard.Root
        className={ classNames(
          style['clipboard'],
          { [style['clipboard--disabled']]: disabled },
          className,
        )}
        data-ods="clipboard"
        onStatusChange={ onCopy }
        ref={ ref }
        role="group"
        value={ value }
        { ...props }>
        { children }
      </VendorClipboard.Root>
    </ClipboardProvider>
  );
});

Clipboard.displayName = 'Clipboard';

export {
  Clipboard,
  type ClipboardProp,
};
