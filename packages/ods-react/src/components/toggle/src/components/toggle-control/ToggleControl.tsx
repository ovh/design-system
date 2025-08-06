import { Switch } from '@ark-ui/react/switch';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { useToggle } from '../../contexts/useToggle';
import { ToggleLabels } from '../toggle-labels/ToggleLabels';
import style from './toggleControl.module.scss';

interface ToggleControlProp extends ComponentPropsWithRef<'span'> {}

const ToggleControl: FC<ToggleControlProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const { withLabels } = useToggle();

  return (
    <>
      <Switch.Control
        className={ classNames(style['toggle-control'], className)}
        data-ods="toggle-control"
        ref={ ref }
        { ...props }>
        <Switch.Thumb className={ style['toggle-control__thumb'] } />

        {
          withLabels && <ToggleLabels />
        }
      </Switch.Control>

      <Switch.HiddenInput
        aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
        aria-labelledby={ props['aria-labelledby'] || (fieldContext?.labelId ?? '') } />
    </>
  );
});

ToggleControl.displayName = 'ToggleControl';

export {
  ToggleControl,
  type ToggleControlProp,
};
