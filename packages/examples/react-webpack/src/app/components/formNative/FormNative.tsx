import { ODS_INPUT_TYPE } from '@ovhcloud/ods-components';
import { OdsButton, OdsCheckbox, OdsDatepicker, OdsInput, OdsPassword, OdsPhoneNumber, OdsQuantity, OdsRadio, OdsSelect, OdsSwitch, OdsSwitchItem, OdsTextarea, OdsTimepicker } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useRef, useState } from 'react';
import styles from './formNative.scss';

function FormNative(): ReactElement {
  const checkboxRef = useRef<HTMLOdsCheckboxElement>(null);
  const datepickerRef = useRef<HTMLOdsDatepickerElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputNumberRef = useRef<HTMLOdsInputElement>(null);
  const inputTextRef = useRef<HTMLOdsInputElement>(null);
  const passwordRef = useRef<HTMLOdsPasswordElement>(null);
  const phoneNumberRef = useRef<HTMLOdsPhoneNumberElement>(null);
  const quantityRef = useRef<HTMLOdsQuantityElement>(null);
  const radioRef = useRef<HTMLOdsRadioElement>(null);
  const selectRef = useRef<HTMLOdsSelectElement>(null);
  const switchRef = useRef<HTMLOdsSwitchElement>(null);
  const textareaRef = useRef<HTMLOdsTextareaElement>(null);
  const timepickerRef = useRef<HTMLOdsTimepickerElement>(null);

  const [error, setError] = useState({
    checkbox: false,
    datepicker: false,
    inputNumber: false,
    inputText: false,
    password: false,
    phoneNumber: false,
    quantity: false,
    // radio: false, // no error state on this component
    select: false,
    // switch: false, // no error state on this component
    textarea: false,
    timepicker: false,
  });

  async function onSubmit(e: any) {
    e.preventDefault();
    e.stopPropagation();

    // await validateField(checkboxRef.current);
    // await validateField(datepickerRef.current);
    // await validateField(inputNumberRef.current);
    // await validateField(inputTextRef.current);
    // await validateField(passwordRef.current);
    // await validateField(phoneNumberRef.current);
    // await validateField(quantityRef.current);
    // await validateField(radioRef.current);
    // await validateField(selectRef.current);
    // await validateField(switchRef.current);
    // await validateField(textareaRef.current);
    // await validateField(timepickerRef.current);

    const formData = new FormData(formRef.current!);

    for (const [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }

    return false;
  }

  async function validateField(element: any): Promise<void> {
    if (!element) {
      return;
    }

    const validity = await element.getValidity();
    // console.log(validity)
    if (validity !== undefined) {
      setError({
        ...error,
        [element.name]: !validity.valid,
      });
    }
  }

  function onChange(event: CustomEvent) {
    console.log('onChange', event);
  }

  function onReset(event: CustomEvent): void {
    console.log('onReset', event);
  }

  function onClear(event: CustomEvent): void {
    console.log('onClear', event);
  }

  return (
    <form
      className={ styles['form-native'] }
      onSubmit={ onSubmit }
      ref={ formRef }
    >
      <div>
        {/* OKish no validity method but required is managed by browser directly */}
        <OdsCheckbox
          // isRequired={ true }
          inputId="checkbox"
          name="checkbox"
          value="checkbox"
          ref={ checkboxRef }
        />
        <label htmlFor="checkbox">Checked</label>

        <OdsCheckbox
          // isRequired={ true }
          inputId="checkbox2"
          name="checkbox"
          value="checkbox2"
        />
        <label htmlFor="checkbox2">Checked 2</label>
      </div>

      {/* KO? reset to "" instead of null */}
      <OdsDatepicker
        // @ts-ignore IDE try to match another react specific attribute
        defaultValue={ new Date() }
        hasError={ error.datepicker }
        isClearable={ true }
        isRequired={ true }
        name="datepicker"
        onOdsChange={ () => validateField(datepickerRef.current) }
        ref={ datepickerRef }
      />

      {/* KO? reset to "" instead of null */}
      <OdsInput
        defaultValue={ 23 }
        hasError={ error.inputNumber }
        isClearable={ true }
        // isRequired={ true }
        name="inputNumber"
        ref={ inputNumberRef }
        type={ ODS_INPUT_TYPE.number }
      />

      {/* OK */}
      <OdsInput
        // defaultValue="input text"
        hasError={ error.inputText }
        isClearable={ true }
        // isRequired={ true }

        name="inputText"
        ref={ inputTextRef }
        type={ ODS_INPUT_TYPE.text }
      />

      {/* KO style width different */}
      <OdsPassword
        defaultValue="pass"
        hasError={ error.password }
        isClearable={ true }
        isRequired={ true }
        name="password"
        ref={ passwordRef }
      />

      {/* KO default value not in formData on immediate submit */}
      {/* KO style width different */}
      <OdsPhoneNumber
        // defaultValue="+33123456789"
        hasError={ error.phoneNumber }
        isClearable={ true }
        isRequired={ true }
        isoCode="fr"
        name="phoneNumber"
        ref={ phoneNumberRef }
      />

      {/* KO reset does not reset formData if no default value */}
      <OdsQuantity
        // defaultValue={ 22 }
        hasError={ error.quantity }
        isRequired={ true }
        name="quantity"
        ref={ quantityRef }
      />

      {/* OKish no validity method but required is managed by browser directly */}
      <div>
        <OdsRadio
          // isRequired={ true }
          inputId="radio1"
          name="radio"
          isChecked
          value="radio-1"
          ref={ radioRef }

        />
        <label htmlFor="radio1">Radio 1</label>

        <OdsRadio
          // isRequired={ true }
          inputId="radio2"
          name="radio"
          value="radio-2"
        />
        <label htmlFor="radio2">Radio 2</label>
      </div>

      {/* KO required does not return valid: false on empty select */}
      {/* KO reset return empty string instead of null */}
      <OdsSelect
        defaultValue="dog"
        hasError={ error.select }
        isRequired={ true }
        name="select"
        onOdsChange={ (event: any) => onChange(event) }
        onOdsReset={ (event: any) => onReset(event) }
        onOdsClear={ (event: any) => onClear(event) }
        ref={ selectRef }
      >
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </OdsSelect>

      <button onClick={ () => checkboxRef.current?.clear() }>Clear</button>

      {/* KO isRequired => no way to get validity */}
      {/* KO should have an hasError status */}
      {/* Two event change on reset & clear */}
      <OdsSwitch
        isRequired={ true }
        name="switch"
        ref={ switchRef }
      >
        <OdsSwitchItem
          isChecked
          value="option1"
        >
          Option 1
        </OdsSwitchItem>
        <OdsSwitchItem
          value="option2"
        >
          Option 2
        </OdsSwitchItem>
      </OdsSwitch>

      {/* OK */}
      <OdsTextarea
        defaultValue="textarea"
        hasError={ error.textarea }
        isRequired={ true }
        name="textarea"
        ref={ textareaRef }
      />

      {/* OK */}
      <OdsTimepicker
        // defaultValue="12:34"
        hasError={ error.timepicker }
        isRequired={ true }
        name="timepicker"
        ref={ timepickerRef }
      />

      {/* OK */}
      <input
        name="hidden-input"
        type="hidden"
        value="should be present in form data" />

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

export { FormNative };
