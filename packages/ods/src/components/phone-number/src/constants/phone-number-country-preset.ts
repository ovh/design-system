enum ODS_PHONE_NUMBER_COUNTRY_PRESET {
  all = 'all',
}

type OdsPhoneNumberCountryPreset = `${ODS_PHONE_NUMBER_COUNTRY_PRESET}`;

const ODS_PHONE_NUMBER_COUNTRY_PRESETS = Object.freeze(Object.values(ODS_PHONE_NUMBER_COUNTRY_PRESET));

export {
  ODS_PHONE_NUMBER_COUNTRY_PRESET,
  ODS_PHONE_NUMBER_COUNTRY_PRESETS,
  type OdsPhoneNumberCountryPreset,
};
