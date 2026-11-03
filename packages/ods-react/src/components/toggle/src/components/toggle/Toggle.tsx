import { Switch } from '@ark-ui/react/switch';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef } from 'react';
import { warnOnce } from '../../../../../utils/warn-once';
import { useFormField } from '../../../../form-field/src';
import { ToggleProvider, type ToggleRootProp } from '../../contexts/useToggle';
import style from './toggle.module.scss';

interface ToggleProp extends ComponentPropsWithRef<'label'>, ToggleRootProp {
  /**
   * The parts of the toggle to render: a ToggleControl, and a ToggleLabel if needed.
   */
  children: ReactNode;
}

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

  if (children == null) {
    warnOnce('Toggle.children', 'Toggle renders its children only: please render a <ToggleControl />, otherwise neither the control nor its form input is rendered.');
  }

  return (
    <ToggleProvider withLabels={ withLabels }>
      <Switch.Root
        checked={ checked }
        className={ classNames(style['toggle'], className) }
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
        { children }
      </Switch.Root>
    </ToggleProvider>
  );
});

Toggle.displayName = 'Toggle';

export {
  Toggle,
  type ToggleProp,
};
