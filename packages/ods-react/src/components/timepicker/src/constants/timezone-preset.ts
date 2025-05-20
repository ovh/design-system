enum TIMEZONES_PRESET {
  all = 'all'
}

type TimezonesPreset = `${TIMEZONES_PRESET}`;

const TIMEZONES_PRESETS = Object.freeze(Object.values(TIMEZONES_PRESET));

export {
  type TimezonesPreset,
  TIMEZONES_PRESETS,
  TIMEZONES_PRESET,
};
