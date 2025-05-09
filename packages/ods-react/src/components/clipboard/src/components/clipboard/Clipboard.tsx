import { Clipboard as VendorClipboard } from '@ark-ui/react/clipboard';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ClipboardContext } from '../../contexts/useClipboard';
import style from './clipboard.module.scss';

interface ClipboardProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'> {
  disabled?: boolean,
  onCopy?: () => void,
  value?: string,
}

const Clipboard: FC<ClipboardProp> = forwardRef(({
  children,
  className,
  disabled,
  onCopy,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <ClipboardContext.Provider value={{ disabled }}>
      <VendorClipboard.Root
        className={ classNames(
          style['clipboard'],
          { [style['clipboard--disabled']]: disabled },
          className,
        )}
        onStatusChange={ onCopy }
        ref={ ref }
        value={ value }
        { ...props }>
        { children }
      </VendorClipboard.Root>
    </ClipboardContext.Provider>
  );
});

Clipboard.displayName = 'Clipboard';

export {
  Clipboard,
  type ClipboardProp,
};
