import { Select } from '@ark-ui/react/select';
import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import { type SelectGroupItem } from '../../contexts/useSelect';
import { SelectOption, type SelectOptionProp } from '../select-option/SelectOption';
import style from './selectGroup.module.scss';

type SelectCustomGroupRendererArg = {
  customData?: Record<string, any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  label: string,
}

interface SelectGroupProp {
  customGroupRenderer?: (arg: SelectCustomGroupRendererArg) => JSX.Element,
  customOptionRenderer?: SelectOptionProp['customOptionRenderer'],
  item: SelectGroupItem,
}

const SelectGroup: FC<SelectGroupProp> = ({
  customGroupRenderer,
  customOptionRenderer,
  item,
}): JSX.Element => {
  return (
    <Select.ItemGroup>
      <Select.ItemGroupLabel className={ classNames(
        style['select-group'],
        { [style[ 'select-group--disabled']]: item.disabled },
      )}>
        {
          customGroupRenderer
            ? customGroupRenderer({
              customData: item.customRendererData,
              label: item.label,
            })
            : item.label
        }
      </Select.ItemGroupLabel>

      {
        item.options.map((option) => (
          <SelectOption
            className={ style['select-group__option'] }
            customOptionRenderer={ customOptionRenderer }
            item={ option }
            key={ option.value } />
        ))
      }
    </Select.ItemGroup>
  );
};

SelectGroup.displayName = 'SelectGroup';

export {
  type SelectCustomGroupRendererArg,
  SelectGroup,
  type SelectGroupProp,
};
