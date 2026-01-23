import { Portal } from '@ark-ui/react/portal';
import { Select, useSelectContext } from '@ark-ui/react/select';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { type SelectCustomGroupRendererArg, type SelectCustomOptionRendererArg, type SelectGroupItem, type SelectOptionItem, useSelect } from '../../contexts/useSelect';
import { isGroup } from '../../controller/select';
import { SelectGroup } from '../select-group/SelectGroup';
import { SelectOption } from '../select-option/SelectOption';
import style from './selectContent.module.scss';

interface SelectContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean,
  /**
   * Custom render for each group item.
   */
  customGroupRenderer?: (arg: SelectCustomGroupRendererArg) => JSX.Element,
  /**
   * Custom render for each option item.
   */
  customOptionRenderer?: (arg: SelectCustomOptionRendererArg) => JSX.Element,
}

const SelectContent: FC<SelectContentProp> = forwardRef(({
  className,
  createPortal = true,
  customGroupRenderer,
  customOptionRenderer,
  ...props
}, ref): JSX.Element => {
  const { invalid, items, positionerStyle } = useSelect();
  const { open } = useSelectContext();

  return (
    <Portal disabled={ !createPortal }>
      <Select.Positioner style={{
        zIndex: 'var(--ods-theme-overlay-z-index)',
        ...(positionerStyle || {}),
      }}>
        <Select.Content
          className={ classNames(
            style['select-content'],
            { [style['select-content--invalid']]: invalid },
            className,
          )}
          data-empty={ items.length === 0 }
          data-ods="select-content"
          ref={ ref }
          { ...props }
          style={{
            ...props.style,
            ...(!open ? { display: 'none' } : {}),
          }}>
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
