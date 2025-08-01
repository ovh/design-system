import { Clipboard, useClipboardContext } from '@ark-ui/react/clipboard';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { INPUT_TYPE, Input, type InputMaskState } from '../../../../input/src';
import { useClipboard } from '../../contexts/useClipboard';
import style from './clipboardControl.module.scss';

interface ClipboardControlProp extends ComponentPropsWithRef<'input'> {
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean,
  /**
   * Whether the masked display is active and its initial state.
   */
  maskOption?: {
    enable: boolean,
    initialState?: InputMaskState,
  },
}

const ClipboardControl: FC<ClipboardControlProp> = forwardRef(({
  className,
  loading,
  maskOption,
  ...props
}, ref): JSX.Element => {
  const { disabled, i18n, locale } = useClipboard();
  const { value } = useClipboardContext();

  return (
    <Clipboard.Control asChild>
      <Input
        className={ classNames(style['clipboard__input'], className) }
        i18n={ i18n }
        loading={ loading }
        locale={ locale }
        maskOption={ maskOption }
        { ...props }
        disabled={ disabled }
        readOnly
        ref={ ref }
        type={ INPUT_TYPE.text }
        value={ value } />
    </Clipboard.Control>
  );
});

ClipboardControl.displayName = 'ClipboardControl';

export { ClipboardControl, type ClipboardControlProp };
