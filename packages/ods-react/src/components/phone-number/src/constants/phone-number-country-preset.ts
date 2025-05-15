enum PHONE_NUMBER_COUNTRY_PRESET {
  all = 'all',
}

type PhoneNumberCountryPreset = `${PHONE_NUMBER_COUNTRY_PRESET}`;

const PHONE_NUMBER_COUNTRY_PRESETS = Object.freeze(Object.values(PHONE_NUMBER_COUNTRY_PRESET));

export {
  PHONE_NUMBER_COUNTRY_PRESET,
  PHONE_NUMBER_COUNTRY_PRESETS,
  type PhoneNumberCountryPreset,
};
