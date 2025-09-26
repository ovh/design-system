import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, useId } from 'react';
import { type ComboboxGroupItem, useCombobox } from '../../contexts/useCombobox';
import { ComboboxOption } from '../combobox-option/ComboboxOption';
import style from './comboboxGroup.module.scss';

interface ComboboxGroupProp extends ComponentPropsWithRef<'div'> {
  item: ComboboxGroupItem;
}

const ComboboxGroup: FC<ComboboxGroupProp> = ({
  className,
  item,
  ...props
}): JSX.Element => {
  const groupLabelId = useId();
  const { disabled, highlightedOptionValue } = useCombobox();

  return (
    <div
      aria-labelledby={ groupLabelId }
      className={ style['combobox-group'] }
      role="group"
      { ...props }>
      <div
        className={ classNames(
          style['combobox-group__label'],
          { [style['combobox-group__label--disabled']]: disabled },
        )}
        id={ groupLabelId }
        role="presentation">
        { item.label }
      </div>

      {
        item.options.map((option) => (
          <ComboboxOption
            className={ style['combobox-group__option'] }
            isHighlighted={ highlightedOptionValue === option.value }
            item={ option }
            key={ option.value } />
        ))
      }
    </div>
  );
};

ComboboxGroup.displayName = 'ComboboxGroup';

export {
  ComboboxGroup,
  type ComboboxGroupProp,
};
