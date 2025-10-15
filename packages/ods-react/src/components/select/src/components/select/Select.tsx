import { Select as VendorSelect, createListCollection } from '@ark-ui/react/select';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useMemo } from 'react';
import { useFormField } from '../../../../form-field/src';
import { type SelectGroupItem, type SelectItem, type SelectMultipleMode, type SelectOptionItem, SelectProvider } from '../../contexts/useSelect';
import { isGroup } from '../../controller/select';

interface SelectValueChangeDetail {
  items: SelectItem[],
  value: string[],
}

interface SelectProp extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  /**
   * The initial selected value(s). Use when you don't need to control the selected value(s) of the select.
   */
  defaultValue?: string | string[],
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the dropdown width should stay the same as the input.
   */
  fitControlWidth?: boolean,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The list of items
   */
  items: SelectItem[],
  /**
   * Allows multiple selection and define how it should be rendered.
   */
  multiple?: SelectMultipleMode,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the value(s) changes.
   */
  onValueChange?: (detail: SelectValueChangeDetail) => void,
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean,
  /**
   * Whether the component is required.
   */
  required?: boolean,
  /**
   * The controlled selected value(s).
   */
  value?: string[],
}

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
  type SelectValueChangeDetail,
};
