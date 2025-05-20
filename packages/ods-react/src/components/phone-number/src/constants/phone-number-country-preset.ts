enum PHONE_NUMBER_COUNTRIES_PRESET {
  all = 'all',
}

type PhoneNumberCountriesPreset = `${PHONE_NUMBER_COUNTRIES_PRESET}`;

const PHONE_NUMBER_COUNTRIES_PRESETS = Object.freeze(Object.values(PHONE_NUMBER_COUNTRIES_PRESET));

export {
  PHONE_NUMBER_COUNTRIES_PRESET,
  PHONE_NUMBER_COUNTRIES_PRESETS,
  type PhoneNumberCountriesPreset,
};
