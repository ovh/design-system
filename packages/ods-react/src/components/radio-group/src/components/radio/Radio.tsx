import { RadioGroup } from '@ark-ui/react/radio-group';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { withFormField } from '../../../../form-field/src';
import style from './radio.module.scss';

interface RadioProp extends ComponentPropsWithRef<'label'> {
  disabled?: boolean,
  invalid?: boolean,
  required?: boolean,
  value: string,
}

const Radio: FC<RadioProp> = withFormField(forwardRef(({
  children,
  className,
  disabled,
  onChange,
  required,
  ...props
}, ref): JSX.Element => {
  return (
    <RadioGroup.Item
      className={ classNames(style['radio'], className) }
      disabled={ disabled }
      ref={ ref }
      { ...props }>
      { children }

      <RadioGroup.ItemHiddenInput required={ required } />
    </RadioGroup.Item>
  );
}));

Radio.displayName = 'Radio';

export {
  Radio,
  type RadioProp,
};
