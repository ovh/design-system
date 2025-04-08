import { Portal } from '@ark-ui/react/portal';
import { Select, createListCollection } from '@ark-ui/react/select';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useMemo } from 'react';
import { ODS_ICON_NAME, OdsIcon } from '../../../../icon/src';
import style from './odsSelect.module.scss';

// TODO fix issue with label

// TODO item group (+disabled group)
// TODO custom option rendering?
// TODO test overflow
// TODO test disabled items
// TODO test multiple => need checkbox

type OdsSelectItem = {
  disabled?: boolean,
  label: string,
  value: string,
}
// TODO invalid, required?
interface OdsSelectProp extends ComponentPropsWithRef<'div'> {
  defaultValue?: string | string[],
  disabled?: boolean,
  items: OdsSelectItem[],
  multiple?: boolean,
  placeholder?: string,
  readOnly?: boolean,
}

const OdsSelect: FC<OdsSelectProp> = forwardRef(({
  children,
  className,
  defaultValue,
  disabled = false,
  items = [],
  multiple = false,
  placeholder,
  readOnly = false,
  ...props
}, ref): JSX.Element => {
  const options = createListCollection<OdsSelectItem>({ items });
  const defaultValues = useMemo(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
  }, [defaultValue]);

  return (
    <Select.Root
      className={ classNames(style['ods-select'], className) }
      collection={ options }
      defaultValue={ defaultValues }
      disabled={ disabled }
      multiple={ multiple }
      positioning={{
        gutter: -1,
        sameWidth: true,
      }}
      readOnly={ readOnly }
      ref={ ref }
      { ...props }>
      {/* TODO KO when using OdsFormFieldLabel */}
      <Select.Label>Label</Select.Label>
      <Select.Control>
        <Select.Trigger className={ style['ods-select__trigger'] }>
          <Select.ValueText placeholder={ placeholder } />

          <Select.Indicator asChild>
            <OdsIcon
              className={ style['ods-select__trigger__icon'] }
              name={ ODS_ICON_NAME.chevronDown } />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content
            className={ style['ods-select__content'] }
            ref={ ref }
            { ...props }>
            {
              items.map((item) => (
                <Select.Item
                  className={ style['ods-select__content__option'] }
                  key={ item.value }
                  item={ item }>
                  <Select.ItemText>
                    { item.label }
                  </Select.ItemText>
                </Select.Item>
              ))
            }
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
});

OdsSelect.displayName = 'OdsSelect';

export {
  OdsSelect,
  type OdsSelectItem,
  type OdsSelectProp,
};
