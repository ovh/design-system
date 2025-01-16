enum ODS_TIMEZONES_PRESET {
  all = 'all'
}

/** @deprecated use `OdsTimezonesPreset` instead */
type OdsTimezonePreset =`${ODS_TIMEZONES_PRESET}`;

type OdsTimezonesPreset = OdsTimezonePreset;

const ODS_TIMEZONES_PRESETS = Object.freeze(Object.values(ODS_TIMEZONES_PRESET));

export {
  type OdsTimezonePreset,
  type OdsTimezonesPreset,
  ODS_TIMEZONES_PRESETS,
  ODS_TIMEZONES_PRESET,
};
