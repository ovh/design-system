import { Checkbox, useCheckboxContext } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import style from './checkboxControl.module.scss';

interface CheckboxControlProp extends ComponentPropsWithRef<'div'> {}

const CheckboxControl: FC<CheckboxControlProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const inputRef = useRef<HTMLInputElement>(null);
  const { indeterminate } = useCheckboxContext();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <>
      <Checkbox.Control
        className={ classNames(style['checkbox-control'], className) }
        data-ods="checkbox-control"
        ref={ ref }
        { ...props }>
        <Checkbox.Indicator>
          <Icon
            className={ style['checkbox-control__icon'] }
            name={ ICON_NAME.check } />
        </Checkbox.Indicator>

        <Checkbox.Indicator indeterminate>
          <Icon
            className={ style['checkbox-control__icon'] }
            name={ ICON_NAME.minus } />
        </Checkbox.Indicator>
      </Checkbox.Control>

      <Checkbox.HiddenInput
        aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
        ref={ inputRef } />
    </>
  );
});

CheckboxControl.displayName = 'CheckboxControl';

export {
  CheckboxControl,
  type CheckboxControlProp,
};
