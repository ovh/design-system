import { RadioGroup } from '@ark-ui/react/radio-group';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface RadioLabelProp extends ComponentPropsWithRef<'span'> {}

const RadioLabel: FC<RadioLabelProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <RadioGroup.ItemText
      className={ className }
      ref={ ref }
      { ...props }>
      { children }
    </RadioGroup.ItemText>
  );
});

RadioLabel.displayName = 'RadioLabel';

export {
  RadioLabel,
  type RadioLabelProp,
};
