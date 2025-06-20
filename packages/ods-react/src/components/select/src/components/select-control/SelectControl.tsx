import { Select, useSelectContext } from '@ark-ui/react/select';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { type SelectCustomItemRendererArg, useSelect } from '../../contexts/useSelect';
import { SelectValueText } from '../select-value-text/SelectValueText';
import style from './selectControl.module.scss';

interface SelectControlProp extends ComponentPropsWithRef<'button'> {
  /**
   * Custom render for the selected item(s).
   */
  customItemRenderer?: (arg: SelectCustomItemRendererArg) => JSX.Element,
  /**
   * Label displayed on multiple selection when in "merge" mode.
   */
  multipleSelectionLabel?: string,
  /**
   * The placeholder text to display in the select.
   */
  placeholder?: string,
}

const SelectControl: FC<SelectControlProp> = forwardRef(({
  className,
  customItemRenderer,
  id,
  placeholder,
  multipleSelectionLabel,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const { items } = useSelect();
  const { disabled } = useSelectContext();

  return (
    <Select.Control>
      <Select.Trigger
        aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
        className={ classNames(style['select-control'], className) }
        data-empty={ items.length === 0 }
        ref={ ref }
        { ...props }>
        <SelectValueText
          customItemRenderer={ customItemRenderer }
          multipleSelectionLabel={ multipleSelectionLabel }
          placeholder={ placeholder } />

        <Select.Indicator asChild>
          <Icon
            className={ classNames(
              style['select-control__icon'],
              { [style['select-control__icon--disabled']]: disabled },
            )}
            name={ ICON_NAME.chevronDown } />
        </Select.Indicator>
      </Select.Trigger>

      <Select.HiddenSelect id={ id || fieldContext?.id } />
    </Select.Control>
  );
});

SelectControl.displayName = 'SelectControl';

export {
  SelectControl,
  type SelectControlProp,
};
