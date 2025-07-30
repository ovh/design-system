import { Clipboard, useClipboardContext } from '@ark-ui/react/clipboard';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { type INPUT_I18N, INPUT_TYPE, Input, type InputMaskState } from '../../../../input/src';
import { useClipboard } from '../../contexts/useClipboard';
import style from './clipboardControl.module.scss';

interface ClipboardControlProp extends ComponentPropsWithRef<'input'> {
  /**
   * Internal translations override (see Input i18n keys).
   */
  i18n?: Partial<Record<INPUT_I18N.maskButtonHide | INPUT_I18N.maskButtonShow, string>>,
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
  i18n,
  loading,
  maskOption,
  ...props
}, ref): JSX.Element => {
  const { disabled } = useClipboard();
  const { value } = useClipboardContext();

  return (
    <Clipboard.Control asChild>
      <Input
        className={ classNames(style['clipboard__input'], className) }
        i18n={ i18n }
        loading={ loading }
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
