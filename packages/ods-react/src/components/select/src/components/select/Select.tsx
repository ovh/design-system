import { Select as VendorSelect, createListCollection } from '@ark-ui/react/select';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useMemo } from 'react';
import { type SelectGroupItem, type SelectItem, type SelectMultipleMode, type SelectOptionItem, SelectProvider } from '../../contexts/useSelect';
import { isGroup } from '../../controller/select';

interface SelectProp extends ComponentPropsWithRef<'div'> {
  defaultValue?: string | string[],
  disabled?: boolean,
  items: SelectItem[],
  invalid?: boolean,
  multiple?: SelectMultipleMode,
  name?: string,
  readOnly?: boolean,
  required?: boolean,
}

const Select: FC<SelectProp> = forwardRef(({
  children,
  className,
  defaultValue,
  disabled = false,
  items = [],
  invalid,
  multiple = false,
  name,
  readOnly = false,
  required,
  ...props
}, ref): JSX.Element => {
  const collection = useMemo(() => {
    const options = items.reduce((res, item) => {
      if (isGroup(item)) {
        res = res.concat((item as SelectGroupItem).options);
      } else {
        res.push(item as SelectOptionItem);
      }
      return res;
    }, [] as SelectOptionItem[]);

    return createListCollection<SelectOptionItem>({ items: options });
  }, [items]);

  const defaultValues = useMemo(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
  }, [defaultValue]);

  return (
    <SelectProvider
      items={ items }
      multiple={ multiple }>
      <VendorSelect.Root
        className={ className }
        collection={ collection }
        defaultValue={ defaultValues }
        disabled={ disabled }
        invalid={ invalid }
        loopFocus={ true }
        multiple={ !!multiple }
        name={ name }
        positioning={{
          gutter: -1,
          sameWidth: true,
        }}
        readOnly={ readOnly }
        ref={ ref }
        required={ required }
        { ...props }>
        { children }
      </VendorSelect.Root>
    </SelectProvider>
  );
});

Select.displayName = 'Select';

export {
  Select,
  type SelectProp,
};
