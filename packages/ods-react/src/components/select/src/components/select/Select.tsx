import { Select as VendorSelect, createListCollection } from '@ark-ui/react/select';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useMemo } from 'react';
import { type SelectGroupItem, type SelectItem, type SelectMultipleMode, type SelectOptionItem, SelectProvider } from '../../contexts/useSelect';
import { isGroup } from '../../controller/select';

interface SelectValueChangeDetail {
  items: SelectItem[],
  value: string[],
}

interface SelectProp extends ComponentPropsWithRef<'div'> {
  defaultValue?: string | string[],
  disabled?: boolean,
  fitControlWidth?: boolean,
  items: SelectItem[],
  invalid?: boolean,
  multiple?: SelectMultipleMode,
  name?: string,
  onValueChange?: (detail: SelectValueChangeDetail) => void,
  readOnly?: boolean,
  required?: boolean,
  value?: string[],
}

const Select: FC<SelectProp> = forwardRef(({
  children,
  className,
  defaultValue,
  disabled = false,
  fitControlWidth = true,
  items = [],
  invalid,
  multiple = false,
  name,
  onValueChange,
  readOnly = false,
  required,
  value,
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
        onValueChange={ onValueChange }
        positioning={{
          gutter: -1,
          sameWidth: fitControlWidth,
        }}
        readOnly={ readOnly }
        ref={ ref }
        required={ required }
        value={ value }
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
  type SelectValueChangeDetail,
};
