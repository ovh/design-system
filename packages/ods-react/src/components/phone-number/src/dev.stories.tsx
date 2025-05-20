import { useState } from 'react';
import { FormField, FormFieldLabel } from '../../form-field/src';
import { PhoneNumber, PhoneNumberControl, type PhoneNumberCountryChangeDetail, PhoneNumberCountryList, type PhoneNumberCountryIsoCode, type PhoneNumberValueChangeDetail } from '.';
import style from './dev.module.css';

export default {
  component: PhoneNumber,
  title: 'PhoneNumber dev',
};

export const AllCountries = () => (
  <PhoneNumber>
    <PhoneNumberCountryList />

    <PhoneNumberControl />
  </PhoneNumber>
);

export const Clearable = () => (
  <PhoneNumber>
    <PhoneNumberControl clearable />
  </PhoneNumber>
);

export const ControlledCountry = () => {
  const [country, setCountry] = useState<PhoneNumberCountryIsoCode>('fr');

  function onCountryChange(detail: PhoneNumberCountryChangeDetail) {
    setCountry(detail.value)
  }

  return (
    <>
      <p>
        Current country: { country }
      </p>

      <PhoneNumber
        country={ country }
        onCountryChange={ onCountryChange }>
        <PhoneNumberControl clearable />
      </PhoneNumber>

      <PhoneNumber
        country={ country }
        onCountryChange={ onCountryChange }>
        <PhoneNumberCountryList />

        <PhoneNumberControl clearable />
      </PhoneNumber>
    </>
  );
};

export const ControlledInput = () => {
  const [value, setValue] = useState('');

  function onValueChange(detail: PhoneNumberValueChangeDetail) {
    setValue(detail.value)
  }

  return (
    <>
      <PhoneNumber
        country="fr"
        onValueChange={ onValueChange }
        value={ value }>
        <PhoneNumberControl clearable />
      </PhoneNumber>

      <PhoneNumber
        country="fr"
        onValueChange={ onValueChange }
        value={ value }>
        <PhoneNumberCountryList />

        <PhoneNumberControl clearable />
      </PhoneNumber>
    </>
  );
};

export const CountrySubset = () => (
  <PhoneNumber countries={ ['de', 'fr', 'it'] }>
    <PhoneNumberCountryList />

    <PhoneNumberControl />
  </PhoneNumber>
);

export const CustomCSS = () => (
  <PhoneNumber className={ style['custom-phone-number'] }>
    <PhoneNumberCountryList className={ style['custom-phone-number-country-list'] } />

    <PhoneNumberControl className={ style['custom-phone-number-control'] } />
  </PhoneNumber>
);

export const Default = () => (
  <PhoneNumber>
    <PhoneNumberControl />
  </PhoneNumber>
);

export const DefaultValue = () => (
  <>
    <PhoneNumber defaultValue="06123456789">
      <PhoneNumberControl />
    </PhoneNumber>

    <PhoneNumber defaultValue="06123456789">
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>
  </>
);

export const Disabled = () => (
  <>
    <PhoneNumber disabled>
      <PhoneNumberControl />
    </PhoneNumber>

    <PhoneNumber disabled>
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>
  </>
);

export const InFormField = () => (
  <FormField>
    <FormFieldLabel>
      Label:
    </FormFieldLabel>

    <PhoneNumber>
      <PhoneNumberCountryList />

      <PhoneNumberControl clearable />
    </PhoneNumber>
  </FormField>
);

export const Invalid = () => (
  <>
    <PhoneNumber invalid>
      <PhoneNumberControl />
    </PhoneNumber>

    <PhoneNumber invalid>
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>
  </>
);

export const IsoCode = () => (
  <>
    <p>
      No isoCode set, should use one from navigator languages ({ navigator.languages.join(', ') }):
    </p>

    <PhoneNumber>
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>

    <p>
      Correct isoCode set, should use it:
    </p>

    <PhoneNumber country="de">
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>

    <p>
      Incorrect isoCode set, should fallback from navigator languages ({ navigator.languages.join(', ') }):
    </p>

    {/* @ts-ignore */}
    <PhoneNumber country="ww">
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>
  </>
);

export const Locale = () => (
  <>
    <p>
      No locale set, should use one from navigator languages ({ navigator.languages.join(', ') }):
    </p>

    <PhoneNumber>
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>

    <p>
      Correct locale set, should use it:
    </p>

    <PhoneNumber locale="fr">
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>

    <p>
      Incorrect locale set, should fallback from navigator languages ({ navigator.languages.join(', ') }):
    </p>

    <PhoneNumber locale="ww">
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>
  </>
);

export const Loading = () => (
  <PhoneNumber>
    <PhoneNumberControl loading />
  </PhoneNumber>
);

export const OnCountryChange = () => {
  const [currentCountry, setCurrentCountry] = useState<string>('');

  return (
    <>
      <p>
        Current country is { currentCountry }
      </p>

      <PhoneNumber onCountryChange={ ({ value }) => setCurrentCountry(value) }>
        <PhoneNumberCountryList />

        <PhoneNumberControl clearable />
      </PhoneNumber>
    </>
  );
};

export const Readonly = () => (
  <>
    <PhoneNumber readOnly>
      <PhoneNumberControl />
    </PhoneNumber>

    <PhoneNumber readOnly>
      <PhoneNumberCountryList />

      <PhoneNumberControl />
    </PhoneNumber>
  </>
);
