import { TIMEZONES_PRESET, type TimezonesPreset } from '../constants/timezone-preset';
import { TIMEZONE, TIMEZONES, type Timezone } from '../constants/timezones';

const FALLBACK_TIMEZONE = TIMEZONE.UTC;

function getBrowserTimezone(): string {
  const browserTimezone = new Date().getTimezoneOffset() / 60 * -1;

  return browserTimezone >= 0 ? `+${browserTimezone}` : browserTimezone.toString();
}

function getCurrentTimezone(timezone?: Timezone, timezones?: Timezone[] | TimezonesPreset): Timezone {
  if (timezone && TIMEZONES.indexOf(timezone as TIMEZONE) >= 0) {
    return timezone;
  }

  const browserTimezone = getBrowserTimezone();
  const timezoneList = getTimezoneList(timezones);
  const defaultValue = timezones === TIMEZONES_PRESET.all ? FALLBACK_TIMEZONE : timezoneList[0];

  return timezoneList.find((t) =>
    t.indexOf(browserTimezone) >= 0 && TIMEZONES.indexOf(t as TIMEZONE) >= 0,
  ) || defaultValue;
}

function getTimezoneList(timezones?: Timezone[] | TimezonesPreset): readonly Timezone[] {
  if (!timezones || timezones === TIMEZONES_PRESET.all) {
    return TIMEZONES;
  }

  const list = timezones.filter((timezone) => TIMEZONES.indexOf(timezone as TIMEZONE) >= 0);

  return list.length ? list : [FALLBACK_TIMEZONE];
}

export {
  FALLBACK_TIMEZONE,
  getBrowserTimezone,
  getCurrentTimezone,
  getTimezoneList,
};
