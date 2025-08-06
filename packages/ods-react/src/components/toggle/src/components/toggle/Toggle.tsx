import { Switch } from '@ark-ui/react/switch';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { ToggleProvider, type ToggleRootProp } from '../../contexts/useToggle';
import { ToggleControl } from '../toggle-control/ToggleControl';
import style from './toggle.module.scss';

interface ToggleProp extends ComponentPropsWithRef<'label'>, ToggleRootProp {}

const Toggle: FC<ToggleProp> = forwardRef(({
  className,
  checked,
  children,
  defaultChecked,
  disabled,
  id,
  invalid,
  name,
  onCheckedChange,
  required,
  value,
  withLabels,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();

  if (!children) {
    console.warn('[DEPRECATED]: Usage of <Toggle /> alone is not recommended. Please use a full composition using <ToggleControl /> (and <ToggleLabel> if needed). Like the following <Toggle><ToggleControl /></Toggle>');
  }

  return (
    <ToggleProvider withLabels={ withLabels }>
      <Switch.Root
        checked={ checked }
        className={ classNames(style['toggle'], children ? className : '' )}
        data-ods="toggle"
        defaultChecked={ defaultChecked }
        disabled={ disabled }
        id={ id || fieldContext?.id }
        invalid={ invalid || fieldContext?.invalid }
        name={ name }
        onCheckedChange={ onCheckedChange }
        ref={ ref }
        required={ required }
        value={ value }
        { ...props }>
        {
          children || <ToggleControl className={ className } />
        }
      </Switch.Root>
    </ToggleProvider>
  );
});

Toggle.displayName = 'Toggle';

export {
  Toggle,
  type ToggleProp,
};
