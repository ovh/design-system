import { Portal } from '@ark-ui/react/portal';
import { Select } from '@ark-ui/react/select';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { type SelectCustomGroupRendererArg, type SelectCustomOptionRendererArg, type SelectGroupItem, type SelectOptionItem, useSelect } from '../../contexts/useSelect';
import { isGroup } from '../../controller/select';
import { SelectGroup } from '../select-group/SelectGroup';
import { SelectOption } from '../select-option/SelectOption';
import style from './selectContent.module.scss';

interface SelectContentProp extends ComponentPropsWithRef<'div'> {
  createPortal?: boolean,
  customGroupRenderer?: (arg: SelectCustomGroupRendererArg) => JSX.Element,
  customOptionRenderer?: (arg: SelectCustomOptionRendererArg) => JSX.Element,
}

const SelectContent: FC<SelectContentProp> = forwardRef(({
  className,
  createPortal = true,
  customGroupRenderer,
  customOptionRenderer,
  ...props
}, ref): JSX.Element => {
  const { items } = useSelect();

  return (
    <Portal disabled={ !createPortal }>
      <Select.Positioner>
        <Select.Content
          className={ classNames(style['select-content'], className) }
          data-empty={ items.length === 0 }
          ref={ ref }
          { ...props }>
          {
            items.map((item, idx) =>
              isGroup(item)
                ? <SelectGroup
                  customGroupRenderer={ customGroupRenderer }
                  customOptionRenderer={ customOptionRenderer }
                  item={ item as SelectGroupItem }
                  key={ idx } />
                : <SelectOption
                  customOptionRenderer={ customOptionRenderer }
                  item={ item as SelectOptionItem }
                  key={ (item as SelectOptionItem).value } />,
            )
          }
        </Select.Content>
      </Select.Positioner>
    </Portal>
  );
});

SelectContent.displayName = 'SelectContent';

export {
  SelectContent,
  type SelectContentProp,
};
