import { useState } from 'react';
import { Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel } from '.';
import { FormField, FormFieldError, FormFieldHelper } from '../../form-field/src';
import { Text, TEXT_PRESET } from '../../text/src';
import { CHECKBOX_VARIANT } from './constants/checkbox-variant';
import style from './dev.module.css';

export default {
  component: Checkbox,
  title: 'Checkbox dev',
};

export const CustomStyle = () => (
  <>
    <h4>Single Checkbox with Custom Style</h4>
    <Checkbox className={ style[ 'custom-checkbox' ] }>
      <CheckboxControl className={ style[ 'custom-checkbox-control' ] } />

      <CheckboxLabel className={ style[ 'custom-checkbox-label' ] }>
        Custom styled checkbox
      </CheckboxLabel>
    </Checkbox>

    <h4>Checkbox Group with Custom Style</h4>
    <CheckboxGroup
      className={ style[ 'custom-checkbox-group' ] }
      name="custom-group">
      <Checkbox className={ style[ 'custom-checkbox' ] } value="custom1">
        <CheckboxControl className={ style[ 'custom-checkbox-control' ] } />

        <CheckboxLabel className={ style[ 'custom-checkbox-label' ] }>
          Custom checkbox 1
        </CheckboxLabel>
      </Checkbox>

      <Checkbox className={ style[ 'custom-checkbox' ] } value="custom2">
        <CheckboxControl className={ style[ 'custom-checkbox-control' ] } />

        <CheckboxLabel className={ style[ 'custom-checkbox-label' ] }>
          Custom checkbox 2
        </CheckboxLabel>
      </Checkbox>
    </CheckboxGroup>
  </>
);

export const Default = () => (
  <Checkbox>
    <CheckboxControl />

    <CheckboxLabel>
      Checkbox label
    </CheckboxLabel>
  </Checkbox>
);

export const Disabled = () => (
  <>
    <Checkbox disabled>
      <CheckboxControl />

      <CheckboxLabel>
        Unchecked
      </CheckboxLabel>
    </Checkbox>

    <Checkbox
      checked
      disabled>
      <CheckboxControl />

      <CheckboxLabel>
        Checked
      </CheckboxLabel>
    </Checkbox>
  </>
);

export const InFormField = () => (
  <div>
    <Text preset={ TEXT_PRESET.label }>
      Legal considerations:
    </Text>

    <FormField invalid>
      <Checkbox>
        <CheckboxControl />

        <CheckboxLabel>
          I agree to the terms and conditions
        </CheckboxLabel>
      </Checkbox>

      <FormFieldHelper>
        Help text
      </FormFieldHelper>

      <FormFieldError>
        Error message
      </FormFieldError>
    </FormField>

    <FormField>
      <Checkbox>
        <CheckboxControl />

        <CheckboxLabel>
          I agree to receive marketing communications
        </CheckboxLabel>
      </Checkbox>

      <FormFieldHelper>
        Help text
      </FormFieldHelper>

      <FormFieldError>
        Error message
      </FormFieldError>
    </FormField>
  </div>
);

export const Indeterminate = () => (
  <Checkbox
    checked="indeterminate"
    onCheckedChange={ (detail) => console.log('check change: ', detail) }>
    <CheckboxControl />

    <CheckboxLabel>
      Checkbox label
    </CheckboxLabel>
  </Checkbox>
);

export const Group = () => (
  <CheckboxGroup
    defaultValue={ ['checkbox2'] }
    name="group"
    onValueChange={ console.log }>
    <Checkbox value="checkbox1">
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox 1
      </CheckboxLabel>
    </Checkbox>

    <Checkbox value="checkbox2">
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox 2
      </CheckboxLabel>
    </Checkbox>
  </CheckboxGroup>
);

export const States = () => (
  <>
    <Checkbox invalid>
      <CheckboxControl />

      <CheckboxLabel>
        Unchecked invalid
      </CheckboxLabel>
    </Checkbox>

    <Checkbox
      disabled
      invalid>
      <CheckboxControl />

      <CheckboxLabel>
        Unchecked invalid & disabled
      </CheckboxLabel>
    </Checkbox>

    <Checkbox
      checked
      invalid>
      <CheckboxControl />

      <CheckboxLabel>
        Checked invalid
      </CheckboxLabel>
    </Checkbox>

    <Checkbox
      checked
      disabled
      invalid>
      <CheckboxControl />

      <CheckboxLabel>
        Checked invalid & disabled
      </CheckboxLabel>
    </Checkbox>
  </>
);

export const ControlledIndeterminate = () => {
  const items = ['react', 'solid', 'vue'];
  const [value, setValue] = useState<string[]>(['react']);

  const isAllSelected = value.length === items.length;
  const isIndeterminate = value.length > 0 && !isAllSelected;

  const handleSelectAllChange = (details: { checked: boolean | 'indeterminate' }) => {
    setValue(details.checked ? items : []);
  };

  return (
    <div style={ { display: 'flex', flexDirection: 'column', gap: '8px' } }>
      <Checkbox
        checked={ isAllSelected ? true : isIndeterminate ? 'indeterminate' : false }
        onCheckedChange={ handleSelectAllChange }
      >
        <CheckboxControl />
        <CheckboxLabel>Select all</CheckboxLabel>
      </Checkbox>

      <CheckboxGroup
        value={ value }
        onValueChange={ (v) => setValue(v) }
        style={ { display: 'flex', flexDirection: 'column', marginLeft: '20px', gap: '8px' } }
      >
        { items.map((item) => (
          <Checkbox key={ item } value={ item }>
            <CheckboxControl />
            <CheckboxLabel>{ item }</CheckboxLabel>
          </Checkbox>
        )) }
      </CheckboxGroup>
    </div>
  );
};

export const UncontrolledIndeterminate = () => {
  const items = ['apple', 'banana', 'orange'];
  const [currentValue, setCurrentValue] = useState(['apple']);
  const [defaultValue, setDefaultValue] = useState(['apple']);
  const [groupKey, setGroupKey] = useState(0);

  const allChecked = currentValue.length === items.length;
  const isIndeterminate = currentValue.length > 0 && !allChecked;

  const handleSelectAllChange = (details: { checked: boolean | 'indeterminate' }) => {
    const newValues = details.checked ? items : [];
    setCurrentValue(newValues);
    setDefaultValue(newValues);
    setGroupKey(k => k + 1);
  };

  return (
    <div style={ { display: 'flex', flexDirection: 'column', gap: '8px' } }>
      <Checkbox
        checked={ allChecked ? true : isIndeterminate ? 'indeterminate' : false }
        onCheckedChange={ handleSelectAllChange }
      >
        <CheckboxControl />
        <CheckboxLabel>Select all</CheckboxLabel>
      </Checkbox>

      <CheckboxGroup
        key={ groupKey }
        defaultValue={ defaultValue }
        onValueChange={ (v) => setCurrentValue(v) }
        style={ { display: 'flex', flexDirection: 'column', marginLeft: '20px', gap: '8px' } }
      >
        { items.map((item) => (
          <Checkbox key={ item } value={ item }>
            <CheckboxControl />
            <CheckboxLabel>{ item }</CheckboxLabel>
          </Checkbox>
        )) }
      </CheckboxGroup>
    </div>
  );
};

export const ControlledTile = () => {
  const items = ['react', 'solid', 'vue'];
  const [value, setValue] = useState<string[]>(['react']);
  {
    return <CheckboxGroup
      value={ value }
      onValueChange={ (v) => setValue(v) }
      style={ { display: 'flex', flexDirection: 'column', marginLeft: '20px', gap: '8px' } }
    >
      { items.map((item) => (
        <Checkbox key={ item } value={ item } variant={ CHECKBOX_VARIANT.tile }>
          <CheckboxControl />
          <CheckboxLabel>{ item }</CheckboxLabel>
        </Checkbox>
      )) }
    </CheckboxGroup>
  }
}

export const UncontrolledTile = () => {
  const items = ['react', 'solid', 'vue'];
  {
    return <CheckboxGroup
      style={ { display: 'flex', flexDirection: 'column', marginLeft: '20px', gap: '8px' } }
    >
      <h4>Default</h4>
      { items.map((item) => (
        <Checkbox key={ item } value={ item } variant={ CHECKBOX_VARIANT.tile }>
          <CheckboxControl />
          <CheckboxLabel>{ item }</CheckboxLabel>
        </Checkbox>
      )) }
      <h4>Disabled</h4>
      { items.map((item) => (
        <Checkbox disabled key={ item } value={ item } variant={ CHECKBOX_VARIANT.tile }>
          <CheckboxControl />
          <CheckboxLabel>{ item }</CheckboxLabel>
        </Checkbox>
      )) }
    </CheckboxGroup>
  }
}
