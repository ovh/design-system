import { Select as VendorSelect, createListCollection } from '@ark-ui/react/select';
import { type FC, type JSX, forwardRef, useMemo } from 'react';
import { useFormField } from '../../../../form-field/src';
import { type SelectGroupItem, type SelectOptionItem, SelectProvider, type SelectRootProp } from '../../contexts/useSelect';
import { isGroup } from '../../controller/select';

interface SelectProp extends SelectRootProp {}

const Select: FC<SelectProp> = forwardRef(({
  children,
  className,
  defaultValue,
  disabled = false,
  fitControlWidth = true,
  id,
  invalid,
  items = [],
  multiple = false,
  name,
  onValueChange,
  positionerStyle,
  readOnly = false,
  required,
  value,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();

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
      invalid={ invalid }
      items={ items }
      multiple={ multiple }
      positionerStyle={ positionerStyle }
      readOnly={ readOnly }>
      <VendorSelect.Root
        className={ className }
        collection={ collection }
        data-ods="select"
        defaultValue={ defaultValues }
        disabled={ disabled }
        id={ id || fieldContext?.id }
        invalid={ invalid || fieldContext?.invalid }
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
};
