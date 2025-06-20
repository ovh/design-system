import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { INPUT_TYPE, Input, type InputMaskState } from '../../../../input/src';

interface PasswordProp extends Omit<ComponentPropsWithRef<'input'>, 'type'> {
  /**
   * Whether the clear button is displayed.
   */
  clearable?: boolean,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean,
  /**
   * The masked display initial state.
   */
  maskInitialState?: InputMaskState,
  /**
   * Callback fired when the input value is cleared.
   */
  onClear?: () => void,
}

const Password: FC<PasswordProp> = forwardRef(({
  className,
  clearable,
  invalid,
  loading,
  maskInitialState,
  onClear,
  ...props
}, ref): JSX.Element => {
  return (
    <Input
      className={ className }
      clearable={ clearable }
      invalid={ invalid }
      loading={ loading }
      maskOption={{
        enable: true,
        initialState: maskInitialState,
      }}
      onClear={ onClear }
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
