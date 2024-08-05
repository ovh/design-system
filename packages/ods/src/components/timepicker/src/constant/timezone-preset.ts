enum ODS_TIMEZONES_PRESET {
  all = 'all'
}

type OdsTimezonePreset =`${ODS_TIMEZONES_PRESET}`;

const ODS_TIMEZONES_PRESETS = Object.freeze(Object.values(ODS_TIMEZONES_PRESET));

export {
  type OdsTimezonePreset,
  ODS_TIMEZONES_PRESETS,
  ODS_TIMEZONES_PRESET,
};
