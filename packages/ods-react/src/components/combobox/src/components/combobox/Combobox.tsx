import { type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { ComboboxProvider, type ComboboxRootProp } from '../../contexts/useCombobox';

/**
 * @inheritDoc ComboboxRootProp
 */
interface ComboboxProp extends ComboboxRootProp {}

const Combobox: FC<ComboboxProp> = forwardRef(({
  allowCustomValue = true,
  children,
  className,
  customFilter,
  customOptionRenderer,
  defaultValue,
  disabled,
  highlightResults = false,
  i18n,
  invalid,
  items,
  locale,
  multiple,
  name,
  newElementLabel = 'Add ',
  noResultLabel = 'No results found',
  onInputValueChange,
  onValueChange,
  readOnly,
  required,
  value,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const isInvalid = invalid || fieldContext?.invalid;

  return (
    <ComboboxProvider
      allowCustomValue={ allowCustomValue }
      customFilter={ customFilter }
      customOptionRenderer={ customOptionRenderer }
      defaultValue={ defaultValue }
      disabled={ disabled }
      highlightResults={ highlightResults }
      i18n={ i18n }
      invalid={ isInvalid }
      items={ items }
      locale={ locale }
      multiple={ multiple }
      name={ name }
      newElementLabel={ newElementLabel }
      noResultLabel={ noResultLabel }
      onInputValueChange={ onInputValueChange }
      onValueChange={ onValueChange }
      readOnly={ readOnly }
      required={ required }
      value={ value }>
      <div
        className={ className }
        data-ods="combobox"
        ref={ ref }
        { ...props }>
        { children }
      </div>
    </ComboboxProvider>
  );
});

Combobox.displayName = 'Combobox';

export {
  Combobox,
  type ComboboxProp,
};
