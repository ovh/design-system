import { ODS_INPUT_TYPE } from '@ovhcloud/ods-components';
import { OdsButton, OdsCheckbox, OdsDatepicker, OdsInput, OdsPassword, OdsPhoneNumber, OdsQuantity, OdsRadio, OdsSelect, OdsSwitch, OdsSwitchItem, OdsTextarea, OdsTimepicker } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useRef, useState } from 'react';
import styles from './formNative.scss';

function FormNative(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const [areAllRequired, setAreAllRequired] = useState(false);

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
      </div>

      <p>
        Current configuration:
        <br />
        - All fields required: {areAllRequired.toString()}
      </p>

      {/* KO no odsChange event on mount */}
      {/* KO no odsChangeEvent on reset */}
      <div>
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

      <OdsDatepicker
        isClearable={ true }
        isRequired={ areAllRequired }
        name="datepicker"
      />

      <OdsInput
        isClearable={ true }
        isRequired={ areAllRequired }
        name="inputNumber"
        type={ ODS_INPUT_TYPE.number }
      />

      <OdsInput
        isClearable={ true }
        isRequired={ areAllRequired }
        name="inputText"
        type={ ODS_INPUT_TYPE.text }
      />

      <OdsPassword
        isClearable={ true }
        isRequired={ areAllRequired }
        name="password"
      />

      <OdsPhoneNumber
        isClearable={ true }
        isRequired={ areAllRequired }
        isoCode="fr"
        name="phoneNumber"
      />

      <OdsPhoneNumber
        countries="all"
        isClearable={ true }
        isRequired={ areAllRequired }
        isoCode="fr"
        name="phoneNumberWithCountries"
      />

      {/* KO two odsChangeEvent on change */}
      <OdsQuantity
        isRequired={ areAllRequired }
        name="quantity"
      />

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

      <OdsSelect
        isRequired={ areAllRequired }
        name="select"
      >
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </OdsSelect>

      {/* KO required not reactive */}
      {/* KO no odsChange event on mount ??? => same radio */}
      {/* KO Two event change on reset */}
      <OdsSwitch
        isRequired={ areAllRequired }
        name="switch"
      >
        <OdsSwitchItem
          value="option1"
        >
          Option 1
        </OdsSwitchItem>
        <OdsSwitchItem
          value="option2"
        >
          Option 2
        </OdsSwitchItem>
        <OdsSwitchItem
          value="option3"
        >
          Option 2
        </OdsSwitchItem>
      </OdsSwitch>

      <OdsTextarea
        isRequired={ areAllRequired }
        name="textarea"
      />

      <OdsTimepicker
        isRequired={ areAllRequired }
        name="timepicker"
      />

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
