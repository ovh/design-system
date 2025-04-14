import { Checkbox } from '@ark-ui/react/checkbox';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface CheckboxLabelProp extends ComponentPropsWithRef<'span'> {}

const CheckboxLabel: FC<CheckboxLabelProp> = forwardRef(({
  children,
  ...props
}, ref): JSX.Element => {
  return (
    <Checkbox.Label
      ref={ ref }
      { ...props }>
      { children }
    </Checkbox.Label>
  );
});

CheckboxLabel.displayName = 'CheckboxLabel';

export {
  CheckboxLabel,
  type CheckboxLabelProp,
};
