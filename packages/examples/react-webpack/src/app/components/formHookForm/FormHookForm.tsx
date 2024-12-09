import { ODS_INPUT_TYPE } from '@ovhcloud/ods-components';
import { OdsButton, OdsCheckbox, OdsDatepicker, OdsRange, OdsInput, OdsPassword, OdsPhoneNumber, OdsQuantity, OdsRadio, OdsSelect, OdsSwitch, OdsSwitchItem, OdsTextarea, OdsTimepicker, OdsToggle } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './formHookForm.scss';

type FormData = {
  checkboxAlone: string,
  checkboxGroup: string,
  datepicker: Date | string,
  inputNumber: number,
  inputText: string,
  password: string,
  phoneNumber: string,
  phoneNumberWithCountries: string,
  quantity: number,
  radio: string,
  range: number,
  rangeDual: [number, number],
  select: string,
  switch: string,
  textarea: string,
  timepicker: string,
  toggle: boolean,
}

const defaultValue: FormData = {
  checkboxAlone: 'checkbox alone',
  // checkboxGroup: 'checkbox group1,checkbox group2',
  checkboxGroup: 'checkbox group1',
  datepicker: '01-02-2000',
  inputNumber: 33,
  inputText: 'default input text',
  password: 'default password',
  phoneNumber: '0123456789',
  phoneNumberWithCountries: '+33123456789',
  quantity: 0,
  radio: 'radio1',
  range: 0,
  rangeDual: [0, 30],
  select: 'cat',
  switch: 'switch1',
  textarea: 'default textarea',
  timepicker: '01:23',
  toggle: true,
};

// We have to use control instead of register
// Though our web-components behave as uncontrolled component, register expect to react to native event (blur, change)
// and in our case it should react to ods events (odsBlur, odsChange) and we can't customize this using register.
// Careful though using control, as it is meant for controlled component. But in our case we should not pass
// the value attribute as the component will update it internally anyway, this only causes useless events.
function FormHookForm(): ReactElement {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: defaultValue,
  });
  const [areAllRequired, setAreAllRequired] = useState(false);

  function onSubmit(data: FormData): void {
    console.log('-- submit --')
    console.log(data)
  }

  function onAllRequiredToggle() {
    setAreAllRequired(() => !areAllRequired);
  }

  return (
    <form
      className={ styles['form-hook-form'] }
      onSubmit={ handleSubmit(onSubmit) }
    >
      <div>
        <button onClick={ onAllRequiredToggle }
                type="button">
          Toggle All Required
        </button>
      </div>

      <p>
        Current configuration:
        <br />
        - All fields required: { areAllRequired.toString() }
      </p>

      <Controller
        control={ control }
        name="checkboxAlone"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <div>
            <OdsCheckbox
              inputId="checkboxAlone"
              isChecked={ defaultValue.checkboxAlone === 'checkbox alone' }
              isRequired={ areAllRequired }
              name={ field.name }
              onOdsBlur={ field.onBlur }
              onOdsChange={ (e) => {
                setValue(field.name, e.detail.checked ? e.detail.value || '' : '');
              }}
              value="checkbox alone"
            >
              <label htmlFor="checkboxAlone">Checkbox Alone</label>
            </OdsCheckbox>
          </div>
        }
      />

      <Controller
        control={ control }
        name="checkboxGroup"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <div>
            <OdsCheckbox
              inputId="checkboxGroup1"
              isChecked={ defaultValue.checkboxGroup.split(',').indexOf('checkbox group1') >= 0 }
              isRequired={ areAllRequired }
              name={ field.name }
              onOdsBlur={ field.onBlur }
              onOdsChange={ (e) => {
                setValue(field.name, e.detail.checked ? e.detail.value || '' : '');
              }}
              value="checkbox group1"
            >
              <label htmlFor="checkboxGroup1">Checkbox Group 1</label>
            </OdsCheckbox>

            <OdsCheckbox
              inputId="checkboxGroup2"
              isChecked={ defaultValue.checkboxGroup.split(',').indexOf('checkbox group2') >= 0 }
              isRequired={ areAllRequired }
              name={ field.name }
              onOdsBlur={ field.onBlur }
              onOdsChange={ (e) => {
                setValue(field.name, e.detail.checked ? e.detail.value || '' : '');
              }}
              value="checkbox group2"
            >
              <label htmlFor="checkboxGroup2">Checkbox Group 2</label>
            </OdsCheckbox>
          </div>
        }
      />

      <Controller
        control={ control }
        name="datepicker"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsDatepicker
            defaultValue={ defaultValue.datepicker as string }
            format="dd-mm-yyyy"
            isClearable={ true }
            isDisabled={ field.disabled }
            isRequired={ areAllRequired }
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
          />
        }
      />

      <Controller
        control={ control }
        name="inputNumber"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsInput
            defaultValue={ defaultValue.inputNumber }
            isClearable={ true }
            isRequired={ areAllRequired }
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
            type={ ODS_INPUT_TYPE.number }
          />
        }
      />

      <Controller
        control={ control }
        name="inputText"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsInput
            defaultValue={ defaultValue.inputText }
            isClearable={ true }
            isRequired={ areAllRequired }
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
            type={ ODS_INPUT_TYPE.text }
          />
        }
      />

      <Controller
        control={ control }
        name="password"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsPassword
            defaultValue={ defaultValue.password }
            isClearable={ true }
            isRequired={ areAllRequired }
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
          />
        }
      />

      <Controller
        control={ control }
        name="phoneNumber"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsPhoneNumber
            defaultValue={ defaultValue.phoneNumber }
            isClearable={ true }
            isRequired={ areAllRequired }
            isoCode="fr"
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
          />
        }
      />

      <Controller
        control={ control }
        name="phoneNumberWithCountries"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsPhoneNumber
            countries="all"
            defaultValue={ defaultValue.phoneNumberWithCountries }
            isClearable={ true }
            isRequired={ areAllRequired }
            isoCode="fr"
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
          />
        }
      />

      <Controller
        control={ control }
        name="quantity"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsQuantity
            defaultValue={ defaultValue.quantity }
            isRequired={ areAllRequired }
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
          />
        }
      />

      <Controller
        control={ control }
        name="radio"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <div>
            <OdsRadio
              inputId="radio1"
              isChecked={ defaultValue.radio === 'radio1' }
              isRequired={ areAllRequired }
              name={ field.name }
              onOdsBlur={ field.onBlur }
              onOdsChange={ (e) => {
                setValue(field.name, e.detail.checked ? e.detail.value || '' : '');
              }}
              value="radio1"
            />
            <label htmlFor="radio1">Radio 1</label>

            <OdsRadio
              inputId="radio2"
              isChecked={ defaultValue.radio === 'radio2' }
              isRequired={ areAllRequired }
              name={ field.name }
              onOdsBlur={ field.onBlur }
              onOdsChange={ (e) => {
                setValue(field.name, e.detail.checked ? e.detail.value || '' : '');
              }}
              value="radio2"
            />
            <label htmlFor="radio2">Radio 2</label>
          </div>
        }
      />

      <div style={{ display: 'inline-flex' }}>
        <Controller
          control={ control }
          name="range"
          rules={{ required: areAllRequired }}
          render={({ field }) =>
            <OdsRange
              defaultValue={ defaultValue.range }
              isRequired={ areAllRequired }
              name={ field.name }
              onOdsBlur={ field.onBlur }
              onOdsChange={ field.onChange }
            >
            </OdsRange>
          }
        />

        <Controller
          control={ control }
          name="rangeDual"
          rules={{ required: areAllRequired }}
          render={({ field }) =>
            <OdsRange
              defaultValue={ defaultValue.rangeDual as [number, number] & string }
              isRequired={ areAllRequired }
              name={ field.name }
              onOdsBlur={ field.onBlur }
              onOdsChange={ field.onChange }
            >
            </OdsRange>
          }
        />
      </div>

      <Controller
        control={ control }
        name="select"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsSelect
            defaultValue={ defaultValue.select }
            isRequired={ areAllRequired }
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </OdsSelect>
        }
      />

      <Controller
        control={ control }
        name="switch"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsSwitch
            isRequired={ areAllRequired }
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ (e) => {
              // field.onChange(e); // does not work on init as the field is never set as dirty
              setValue(field.name, e.detail.value || '', { shouldDirty: true });
            }}
          >
            <OdsSwitchItem
              isChecked={ defaultValue.switch === 'switch1' }
              value="switch1">
              Switch 1
            </OdsSwitchItem>
            <OdsSwitchItem
              isChecked={ defaultValue.switch === 'switch2' }
              value="switch2">
              Switch 2
            </OdsSwitchItem>
            <OdsSwitchItem
              isChecked={ defaultValue.switch === 'switch3' }
              value="switch3">
              Switch 3
            </OdsSwitchItem>
          </OdsSwitch>
        }
      />

      <Controller
        control={ control }
        name="textarea"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsTextarea
            defaultValue={ defaultValue.textarea }
            isRequired={ areAllRequired }
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
          />
        }
      />

      <Controller
        control={ control }
        name="timepicker"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsTimepicker
            defaultValue={ defaultValue.timepicker }
            isRequired={ areAllRequired }
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
          />
        }
      />

      <Controller
        control={ control }
        name="toggle"
        rules={{ required: areAllRequired }}
        render={({ field }) =>
          <OdsToggle
            // @ts-ignore IDE is confused with React attribute
            defaultValue={ defaultValue.toggle }
            isRequired={ areAllRequired }
            name={ field.name }
            onOdsBlur={ field.onBlur }
            onOdsChange={ field.onChange }
          />
        }
      />

      <p>
        Errors:
        <br />
        {
          Object.entries(errors).map(([key, value]) => (
            <span key={ key }>
              { key }: { value.message }
              <br />
            </span>
          ))
        }
      </p>

      <div>
        <OdsButton label="Reset button"
                   type="reset"
                   variant="outline" />

        <OdsButton label="Submit button"
                   type="submit" />
      </div>
    </form>
  );
}

export { FormHookForm };
