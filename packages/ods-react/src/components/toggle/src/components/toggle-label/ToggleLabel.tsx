import { Switch } from '@ark-ui/react/switch';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface ToggleLabelProp extends ComponentPropsWithRef<'span'> {}

const ToggleLabel: FC<ToggleLabelProp> = forwardRef(({
  children,
  ...props
}, ref): JSX.Element => {
  return (
    <Switch.Label
      data-ods="toggle-label"
      ref={ ref }
      { ...props }>
      { children }
    </Switch.Label>
  );
});

ToggleLabel.displayName = 'ToggleLabel';

export {
  ToggleLabel,
  type ToggleLabelProp,
};
