import { ODS_INPUT_TYPE } from '@ovhcloud/ods-components';
import { OdsButton, OdsCheckbox, OdsDatepicker, OdsInput, OdsPassword, OdsPhoneNumber, OdsQuantity, OdsRadio, OdsSelect, OdsSwitch, OdsSwitchItem, OdsTextarea, OdsTimepicker } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useRef, useState } from 'react';
import styles from './formNative.scss';

function FormNative(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const [areAllRequired, setAreAllRequired] = useState(false);
  const [withDefaultValue, setWithDefaultValue] = useState(false);

  async function onSubmit(e: any) {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(formRef.current!);

    for (const [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }

    return false;
  }

  function onAllRequiredToggle() {
    setAreAllRequired(() => !areAllRequired);
  }

  function onWithDefaultValueToggle() {
    setWithDefaultValue(() => !withDefaultValue);
  }

  return (
    <form
      className={ styles['form-native'] }
      onSubmit={ onSubmit }
      ref={ formRef }
    >
      <div>
        <button onClick={ onAllRequiredToggle }
                type="button">
          Toggle All Required (broken)
        </button>

        <button onClick={ onWithDefaultValueToggle }
                type="button">
          Toggle Default value
        </button>
      </div>

      <p>
        Current configuration:
        <br />
        - All fields required: {areAllRequired.toString()}
        <br />
        - All fields have default value: {withDefaultValue.toString()}
      </p>

      <div>
        {/* OKish no validity method but required is managed by browser directly */}
        <OdsCheckbox
          isRequired={ areAllRequired }
          inputId="checkbox"
          name="checkbox"
          value="checkbox"
        />
        <label htmlFor="checkbox">Checked</label>

        <OdsCheckbox
          isRequired={ areAllRequired }
          inputId="checkbox2"
          name="checkbox"
          value="checkbox2"
        />
        <label htmlFor="checkbox2">Checked 2</label>
      </div>

      {/*/!* KO? reset to "" instead of null *!/*/}
      {/*<OdsDatepicker*/}
      {/*  // @ts-ignore IDE try to match another react specific attribute*/}
      {/*  defaultValue={ new Date() }*/}
      {/*  hasError={ error.datepicker }*/}
      {/*  isClearable={ true }*/}
      {/*  isRequired={ true }*/}
      {/*  name="datepicker"*/}
      {/*  onOdsChange={ () => validateField(datepickerRef.current) }*/}
      {/*  ref={ datepickerRef }*/}
      {/*/>*/}

      {/*/!* KO? reset to "" instead of null *!/*/}
      <OdsInput
        defaultValue={ withDefaultValue ? 23 : undefined }
        isClearable={ true }
        isRequired={ areAllRequired }
        name="inputNumber"
        type={ ODS_INPUT_TYPE.number }
      />

      {/*/!* OK *!/*/}
      <OdsInput
        defaultValue={ withDefaultValue ? 'input text' : undefined }
        isClearable={ true }
        isRequired={ areAllRequired }
        name="inputText"
        type={ ODS_INPUT_TYPE.text }
      />

      {/*/!* KO style width different *!/*/}
      <OdsPassword
        defaultValue={ withDefaultValue ? 'pass' : undefined }
        isClearable={ true }
        isRequired={ areAllRequired }
        name="password"
      />

      {/*/!* KO default value not in formData on immediate submit *!/*/}
      {/*/!* KO style width different *!/*/}
      <OdsPhoneNumber
        defaultValue={ withDefaultValue ? '+33123456789' : undefined }
        isClearable={ true }
        isRequired={ areAllRequired }
        isoCode="fr"
        name="phoneNumber"
      />

      <OdsPhoneNumber
        countries="all"
        defaultValue={ withDefaultValue ? '+33123456789' : undefined }
        isClearable={ true }
        isRequired={ areAllRequired }
        isoCode="fr"
        name="phoneNumber"
      />

      {/*/!* KO reset does not reset formData if no default value *!/*/}
      <OdsQuantity
        defaultValue={ withDefaultValue ? 22 : undefined }
        isRequired={ areAllRequired }
        name="quantity"
      />

      {/* OKish no validity method but required is managed by browser directly */}
      <div>
        <OdsRadio
          isRequired={ areAllRequired }
          inputId="radio1"
          name="radio"
          value="radio-1"
        />
        <label htmlFor="radio1">Radio 1</label>

        <OdsRadio
          isRequired={ areAllRequired }
          inputId="radio2"
          name="radio"
          value="radio-2"
        />
        <label htmlFor="radio2">Radio 2</label>
      </div>

      {/*/!* KO required does not return valid: false on empty select *!/*/}
      {/*/!* KO reset return empty string instead of null *!/*/}
      {/*<OdsSelect*/}
      {/*  defaultValue="dog"*/}
      {/*  hasError={ error.select }*/}
      {/*  isRequired={ true }*/}
      {/*  name="select"*/}
      {/*  onOdsChange={ (event: any) => onChange(event) }*/}
      {/*  onOdsReset={ (event: any) => onReset(event) }*/}
      {/*  onOdsClear={ (event: any) => onClear(event) }*/}
      {/*  ref={ selectRef }*/}
      {/*>*/}
      {/*  <option value="dog">Dog</option>*/}
      {/*  <option value="cat">Cat</option>*/}
      {/*  <option value="hamster">Hamster</option>*/}
      {/*  <option value="parrot">Parrot</option>*/}
      {/*  <option value="spider">Spider</option>*/}
      {/*  <option value="goldfish">Goldfish</option>*/}
      {/*</OdsSelect>*/}

      {/*<button onClick={ () => checkboxRef.current?.clear() }>Clear</button>*/}

      {/*/!* KO isRequired => no way to get validity *!/*/}
      {/*/!* KO should have an hasError status *!/*/}
      {/*/!* Two event change on reset & clear *!/*/}
      {/*<OdsSwitch*/}
      {/*  isRequired={ true }*/}
      {/*  name="switch"*/}
      {/*  ref={ switchRef }*/}
      {/*>*/}
      {/*  <OdsSwitchItem*/}
      {/*    isChecked*/}
      {/*    value="option1"*/}
      {/*  >*/}
      {/*    Option 1*/}
      {/*  </OdsSwitchItem>*/}
      {/*  <OdsSwitchItem*/}
      {/*    value="option2"*/}
      {/*  >*/}
      {/*    Option 2*/}
      {/*  </OdsSwitchItem>*/}
      {/*</OdsSwitch>*/}

      {/* OK */}
      <OdsTextarea
        defaultValue={ withDefaultValue ? 'textarea' : undefined }
        isRequired={ areAllRequired }
        name="textarea"
      />

      {/*/!* OK *!/*/}
      <OdsTimepicker
        defaultValue={ withDefaultValue ? '12:34' : undefined }
        isRequired={ areAllRequired }
        name="timepicker"
      />

      {/*/!* OK *!/*/}
      {/*<input*/}
      {/*  name="hidden-input"*/}
      {/*  type="hidden"*/}
      {/*  value="should be present in form data" />*/}

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
