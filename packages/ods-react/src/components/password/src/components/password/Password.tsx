import { type FC, type JSX, forwardRef } from 'react';
import { INPUT_TYPE, Input, type InputProp } from '../../../../input/src';
import { type PasswordMaskState } from '../../constants/password-mask-state';

interface PasswordProp extends Omit<InputProp, 'maskOption' | 'type'> {
  maskInitialState?: PasswordMaskState,
}

const Password: FC<PasswordProp> = forwardRef(({
  className,
  maskInitialState,
  ...props
}, ref): JSX.Element => {
  return (
    <Input
      className={ className }
      maskOption={{
        enable: true,
        initialState: maskInitialState,
      }}
      ref={ ref }
      type={ INPUT_TYPE.text }
      { ...props } />
  );
});

Password.displayName = 'Password';

export {
  Password,
  type PasswordProp,
};
