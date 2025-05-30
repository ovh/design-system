import { useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { TEXT_PRESET, Text } from '../../text/src';
import { Timepicker, TimepickerControl, type TimepickerTimezoneChangeDetail, TimepickerTimezoneList, type TimepickerValueChangeDetail, Timezone } from '.';
import { getBrowserTimezone } from './controller/timepicker';
import style from './dev.module.css';

export default {
  component: Timepicker,
  title: 'Timepicker dev',
};

export const ControlledInput = () => {
  const [value, setValue] = useState('');

  function onValueChange(detail: TimepickerValueChangeDetail) {
    setValue(detail.value);
  }

  return (
    <>
      <Timepicker
        onValueChange={ onValueChange }
        value={ value }>
        <TimepickerControl />
      </Timepicker>

      <Timepicker
        onValueChange={ onValueChange }
        value={ value }>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
  );
};

export const ControlledTimezone = () => {
  const [timezone, setTimezone] = useState<Timezone>('UTC-2');

  function onTimezoneChange(detail: TimepickerTimezoneChangeDetail) {
    setTimezone(detail.value)
  }

  return (
    <>
      <p>
        Current timezone: { timezone }
      </p>

      <Timepicker
        onTimezoneChange={ onTimezoneChange }
        timezone={ timezone }>
        <TimepickerControl />
      </Timepicker>

      <Timepicker
        onTimezoneChange={ onTimezoneChange }
        timezone={ timezone }>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
  );
};

export const CustomCSS = () => (
  <Timepicker className={ style['custom-timepicker'] }>
    <TimepickerControl className={ style['custom-timepicker-control'] } />

    <TimepickerTimezoneList className={ style['custom-timepicker-timezone-list'] } />
  </Timepicker>
);

export const CustomLabel = () => (
  <>
    <Text
      htmlFor="timepicker"
      preset={ TEXT_PRESET.label }>
      Label:
    </Text>

    <Timepicker id="timepicker">
      <TimepickerControl />
    </Timepicker>
  </>
);

export const Default = () => (
  <Timepicker>
    <TimepickerControl />
  </Timepicker>
);

export const DefaultValue = () => (
  <>
    <Timepicker defaultValue="15:22">
      <TimepickerControl />
    </Timepicker>

    <br /><br />

    <Timepicker defaultValue="15:22">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
  </>
);

export const Disabled = () => (
  <>
    <Timepicker disabled>
      <TimepickerControl />
    </Timepicker>

    <br /><br />

    <Timepicker disabled>
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
  </>
);

export const InFormField = () => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <>
      <button onClick={ () => setIsInvalid((v) => !v) }>
        Toggle validity
      </button>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          Control only:
        </FormFieldLabel>

        <Timepicker>
          <TimepickerControl />
        </Timepicker>

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          With timezones:
        </FormFieldLabel>

        <Timepicker>
          <TimepickerControl />

          <TimepickerTimezoneList />
        </Timepicker>

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>
    </>
  );
};

export const Invalid = () => (
  <>
    <Timepicker invalid>
      <TimepickerControl />
    </Timepicker>

    <br /><br />

    <Timepicker invalid>
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
  </>
);

export const OnTimezoneChange = () => {
  const [currentTimezone, setCurrentTimezone] = useState<string>('');

  return (
    <>
      <p>
        Current timezone is { currentTimezone }
      </p>

      <Timepicker onTimezoneChange={ ({ value }) => setCurrentTimezone(value) }>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
  );
};

export const OnValueChange = () => {
  const [currentValue, setCurrentValue] = useState<string>('');

  function onValueChange(detail: TimepickerValueChangeDetail) {
    console.log(detail);
    setCurrentValue(detail.value);
  }

  return (
    <>
      <p>
        Current time is { currentValue }
      </p>

      <Timepicker onValueChange={ onValueChange }>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
  );
};

export const Readonly = () => (
  <>
    <Timepicker readOnly>
      <TimepickerControl />
    </Timepicker>

    <br /><br />

    <Timepicker readOnly>
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
  </>
);

export const timezone = () => (
  <>
    <p>
      No timezone set, should use one from browser ({ getBrowserTimezone() }):
    </p>

    <Timepicker>
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>

    <p>
      Correct timezone set, should use it:
    </p>

    <Timepicker timezone="UTC+8">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>

    <p>
      Incorrect timezone set, should fallback to browser ({ getBrowserTimezone() }):
    </p>

    {/* @ts-ignore */}
    <Timepicker timezone="XXX">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
  </>
);

export const TimezoneSubset = () => (
  <Timepicker timezones={ ['UTC+10', 'UTC+0', 'UTC-10'] }>
    <TimepickerControl />

    <TimepickerTimezoneList />
  </Timepicker>
);

export const WithSeconds = () => (
  <>
    <Timepicker withSeconds>
      <TimepickerControl />
    </Timepicker>

    <br /><br />

    <Timepicker withSeconds>
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
  </>
);
