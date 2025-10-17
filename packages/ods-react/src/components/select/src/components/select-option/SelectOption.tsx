import { Select } from '@ark-ui/react/select';
import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import { type SelectCustomOptionRendererArg, type SelectOptionItem, useSelect } from '../../contexts/useSelect';
import { SelectOptionIndicator } from '../select-option-indicator/SelectOptionIndicator';
import style from './selectOption.module.scss';

interface SelectOptionProp {
  className?: string,
  customOptionRenderer?: (arg: SelectCustomOptionRendererArg) => JSX.Element,
  item: SelectOptionItem,
}

const SelectOption: FC<SelectOptionProp> = ({
  className,
  customOptionRenderer,
  item,
}): JSX.Element => {
  const { multiple } = useSelect();

  return (
    <Select.Item
      className={ classNames(
        style['select-option'],
        { [style['select-option--multiple']]: !!multiple },
        className,
      )}
      item={ item }
      key={ item.value }>
      {
        !!multiple &&
        <Select.ItemIndicator asChild>
          <SelectOptionIndicator disabled={ item.disabled } />
        </Select.ItemIndicator>
      }

      <Select.ItemText>
        {
          customOptionRenderer
            ? customOptionRenderer({
              customData: item.customRendererData,
              label: item.label,
            })
            : item.label
        }
      </Select.ItemText>
    </Select.Item>
  );
};

SelectOption.displayName = 'SelectOption';

export {
  SelectOption,
  type SelectOptionProp,
};
