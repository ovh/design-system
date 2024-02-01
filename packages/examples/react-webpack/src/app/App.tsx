import React, { FormEvent, useRef } from 'react';
import { ODS_COUNTRY_ISO_CODE, ODS_LOCALE } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_BUTTON_SIZE, ODS_BUTTON_TYPE, ODS_BUTTON_VARIANT, ODS_INPUT_SIZE, ODS_INPUT_TYPE } from '@ovhcloud/ods-components';
import { OsdsButton, OsdsDivider, OsdsInput, OsdsPassword, OsdsPhoneNumber, OsdsSelect, OsdsSelectOption, OsdsTextarea } from '@ovhcloud/ods-components/react';

const App = () => {
  const formRef = useRef(null);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log(formData)
    }
  }

  function onReset() {
    console.log('form reset')
  }

  return (
    <form ref={ formRef }
          onReset={ onReset }
          onSubmit={ onSubmit }>
      <OsdsInput defaultValue="some text"
                 name="input"
                 placeholder="Type your some text"
                 required
                 size={ ODS_INPUT_SIZE.md }
                 type={ ODS_INPUT_TYPE.text }
                 value="" />

      <OsdsDivider />

      <OsdsPassword name="password"
                    required />

      <OsdsDivider />

      <OsdsTextarea name="textarea"
                    required />

      <OsdsDivider />

      <OsdsSelect name="select"
                  required>
        <OsdsSelectOption value="option1">Option 1</OsdsSelectOption>
        <OsdsSelectOption value="option2">Option 2</OsdsSelectOption>
        <OsdsSelectOption value="option3">Option 3</OsdsSelectOption>
      </OsdsSelect>

      <OsdsDivider />

      <OsdsPhoneNumber isoCode={ ODS_COUNTRY_ISO_CODE.FR }
                       locale={ ODS_LOCALE.FR }
                       name="phone-number" />

      <input name="hidden-input"
             type="hidden"
             value="should be present in form data" />

      <OsdsDivider />

      <OsdsButton inline
                  size={ ODS_BUTTON_SIZE.sm }
                  type={ ODS_BUTTON_TYPE.reset }
                  variant={ ODS_BUTTON_VARIANT.stroked }>
        Reset
      </OsdsButton>

      <OsdsButton color={ ODS_THEME_COLOR_INTENT.primary }
                  inline
                  size={ ODS_BUTTON_SIZE.sm }
                  type={ ODS_BUTTON_TYPE.submit }>
        Submit
      </OsdsButton>
    </form>
  );
};

export { App };
