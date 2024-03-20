import React, { FormEvent, useRef } from 'react';
import { ODS_COUNTRY_ISO_CODE, ODS_LOCALE } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_BUTTON_SIZE, ODS_BUTTON_TYPE, ODS_BUTTON_VARIANT, ODS_INPUT_SIZE, ODS_INPUT_TYPE } from '@ovhcloud/ods-components';
import { OsdsButton, OsdsDatepicker, OsdsDivider, OsdsInput, OsdsPassword, OsdsPhoneNumber, OsdsQuantity, OsdsRange, OsdsSearchBar, OsdsSelect, OsdsSelectOption, OsdsTextarea } from '@ovhcloud/ods-components/react';

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
      <OsdsSearchBar onOdsBlur={() => console.log('blur search bar')}
                     onOdsFocus={() => console.log('focus search bar')}
                     onOdsValueChange={(event) => console.log('value change search bar', event)} />

      <OsdsDivider />

      <OsdsInput defaultValue="some text"
                 name="input"
                 onOdsInputBlur={() => console.log('blur input')}
                 onOdsInputFocus={() => console.log('focus input')}
                 onOdsValueChange={() => console.log('value change input')}
                 placeholder="Type your some text"
                 required
                 size={ ODS_INPUT_SIZE.md }
                 type={ ODS_INPUT_TYPE.text }
                 value="" />

      <OsdsDivider />

      <OsdsPassword name="password"
                    onOdsBlur={() => console.log('blur password')}
                    onOdsFocus={() => console.log('focus password')}
                    onOdsValueChange={() => console.log('value change password')}
                    required />

      <OsdsDivider />

      <OsdsTextarea name="textarea"
                    onOdsBlur={() => console.log('blur textarea')}
                    onOdsFocus={() => console.log('focus textarea')}
                    onOdsValueChange={() => console.log('value change textarea')}
                    required />

      <OsdsDivider />

      <OsdsSelect name="select"
                  onOdsBlur={() => console.log('blur select')}
                  onOdsFocus={() => console.log('focus select')}
                  onOdsValueChange={() => console.log('value change select')}
                  required>
        <OsdsSelectOption value="option1">Option 1</OsdsSelectOption>
        <OsdsSelectOption value="option2">Option 2</OsdsSelectOption>
        <OsdsSelectOption value="option3">Option 3</OsdsSelectOption>
      </OsdsSelect>

      <OsdsDivider />

      <OsdsPhoneNumber isoCode={ ODS_COUNTRY_ISO_CODE.FR }
                       locale={ ODS_LOCALE.FR }
                       name="phone-number"
                       onOdsBlur={() => console.log('blur phone number')}
                       onOdsFocus={() => console.log('focus phone number')}
                       onOdsValueChange={() => console.log('value change phone number')} />

      <OsdsDivider />

      <OsdsQuantity>
        <OsdsButton slot="minus"
                    type={ ODS_BUTTON_TYPE.button }>
          -
        </OsdsButton>

        <OsdsInput name="quantity"
                   onOdsInputBlur={() => console.log('blur input quantity')}
                   onOdsInputFocus={() => console.log('focus input quantity')}
                   onOdsValueChange={() => console.log('value change input quantity')}
                   type={ ODS_INPUT_TYPE.number } />

        <OsdsButton slot="plus"
                    type={ ODS_BUTTON_TYPE.button }>
          +
        </OsdsButton>
      </OsdsQuantity>

      <OsdsDivider />

      <OsdsRange name="range"
                 onOdsBlur={() => console.log('blur range')}
                 onOdsFocus={() => console.log('focus range')}
                 onOdsValueChange={() => console.log('value change range')}  />

      <OsdsDivider />

      <OsdsDatepicker name="datepicker"
                      onOdsDatepickerBlur={() => console.log('blur datepicker')}
                      onOdsDatepickerFocus={() => console.log('focus datepicker')}
                      onOdsDatepickerValueChange={() => console.log('value change datepicker')} />

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

      <OsdsButton type={ ODS_BUTTON_TYPE.button } disabled="" onClick={() => alert("clicked")}
      >
        Test Disabled
      </OsdsButton>
      <OsdsButton type={ ODS_BUTTON_TYPE.button } onClick={() => alert("clicked")}
      >
        Test Not Disabled
      </OsdsButton>
    </form>
  );
};

export { App };
