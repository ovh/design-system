import { Checkbox } from '@ark-ui/react/checkbox';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface OdsCheckboxLabelProp extends ComponentPropsWithRef<'span'> {}

const OdsCheckboxLabel: FC<OdsCheckboxLabelProp> = forwardRef(({
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

OdsCheckboxLabel.displayName = 'OdsCheckboxLabel';

export {
  OdsCheckboxLabel,
  type OdsCheckboxLabelProp,
};
