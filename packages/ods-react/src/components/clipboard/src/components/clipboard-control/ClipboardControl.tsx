import { Clipboard, useClipboardContext } from '@ark-ui/react/clipboard';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { INPUT_TYPE, Input } from '../../../../input/src';
import { type InputProp } from '../../../../input/src';
import { useClipboard } from '../../contexts/useClipboard';
import style from './clipboardControl.module.scss';

interface ClipboardControlProps extends ComponentPropsWithRef<'input'> {
  loading?: InputProp['loading'],
  maskOption?: InputProp['maskOption'],
}

const ClipboardControl: FC<ClipboardControlProps> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { disabled } = useClipboard();
  const { value } = useClipboardContext();

  return <Clipboard.Control asChild>
    <Input
      className={ classNames(style[ 'clipboard__input' ], className) }
      { ...props }
      disabled={ disabled }
      readOnly
      ref={ ref }
      type={ INPUT_TYPE.text }
      value={ value }
    />
  </Clipboard.Control>;
});

ClipboardControl.displayName = 'ClipboardControl';

export { ClipboardControl, type ClipboardControlProps };
