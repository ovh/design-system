import { RadioGroup } from '@ark-ui/react/radio-group';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './radioGroupLabel.module.scss';

interface RadioGroupLabelProp extends ComponentPropsWithRef<'label'> {}

const RadioGroupLabel: FC<RadioGroupLabelProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <RadioGroup.Label
      className={ classNames(style['radio-group-label'], className) }
      ref={ ref }
      { ...props }>
      { children }
    </RadioGroup.Label>
  );
});

RadioGroupLabel.displayName = 'RadioGroupLabel';

export {
  RadioGroupLabel,
  type RadioGroupLabelProp,
};
