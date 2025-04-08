import { type FC, type JSX, forwardRef } from 'react';
import { ODS_INPUT_TYPE, OdsInput, type OdsInputProp } from '../../../../input/src';
import { type OdsPasswordMaskState } from '../../constants/password-mask-state';

interface OdsPasswordProp extends Omit<OdsInputProp, 'maskOption' | 'type'> {
  maskInitialState?: OdsPasswordMaskState,
}

const OdsPassword: FC<OdsPasswordProp> = forwardRef(({
  className,
  maskInitialState,
  ...props
}, ref): JSX.Element => {
  return (
    <OdsInput
      className={ className }
      maskOption={{
        enable: true,
        initialState: maskInitialState,
      }}
      ref={ ref }
      type={ ODS_INPUT_TYPE.text }
      { ...props } />
  );
});

OdsPassword.displayName = 'OdsPassword';

export {
  OdsPassword,
  type OdsPasswordProp,
};
