import { Select } from '@ark-ui/react/select';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { useSelect } from '../../contexts/useSelect';
import { SelectValueText, type SelectValueTextProp } from '../select-value-text/SelectValueText';
import style from './selectControl.module.scss';

interface SelectControlProp extends ComponentPropsWithRef<'button'> {
  customItemRenderer?: SelectValueTextProp['customItemRenderer'],
  multipleSelectionLabel?: string,
  placeholder?: string,
}

const SelectControl: FC<SelectControlProp> = forwardRef(({
  className,
  customItemRenderer,
  placeholder,
  multipleSelectionLabel,
  ...props
}, ref): JSX.Element => {
  const { items } = useSelect();

  return (
    <Select.Control>
      <Select.Trigger
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
            className={ style['select-control__icon'] }
            name={ ICON_NAME.chevronDown } />
        </Select.Indicator>
      </Select.Trigger>
    </Select.Control>
  );
});

SelectControl.displayName = 'SelectControl';

export {
  SelectControl,
  type SelectControlProp,
};
