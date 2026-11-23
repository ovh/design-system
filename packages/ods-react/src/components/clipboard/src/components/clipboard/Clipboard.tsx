import { Clipboard as VendorClipboard } from '@ark-ui/react/clipboard';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useState } from 'react';
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
  positionerStyle,
  value,
  ...props
}, ref): JSX.Element => {
  // Zag stays in its copied state on a copy made during the confirmation: the count tells it apart.
  const [copyCount, setCopyCount] = useState(0);

  function onStatusChange(): void {
    setCopyCount((count) => count + 1);
    onCopy?.();
  }

  return (
    <ClipboardProvider
      copyCount={ copyCount }
      disabled={ disabled }
      i18n={ i18n }
      locale={ locale }
      positionerStyle={ positionerStyle }>
      <VendorClipboard.Root
        className={ classNames(
          style['clipboard'],
          { [style['clipboard--disabled']]: disabled },
          className,
        )}
        data-ods="clipboard"
        onStatusChange={ onStatusChange }
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
