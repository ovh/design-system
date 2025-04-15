import { Select } from '@ark-ui/react/select';
import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import { type SelectOptionItem, useSelect } from '../../contexts/useSelect';
import { SelectOptionIndicator } from '../select-option-indicator/SelectOptionIndicator';
import style from './selectOption.module.scss';

type SelectCustomOptionRendererArg = {
  customData?: Record<string, any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  label: string,
}

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
      key={ item.value }
      item={ item }>
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
  type SelectCustomOptionRendererArg,
  SelectOption,
  type SelectOptionProp,
};
