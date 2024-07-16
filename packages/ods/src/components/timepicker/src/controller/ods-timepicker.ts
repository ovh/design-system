import { ODS_TIMEZONES_PRESET } from '../constant/timezone-preset';
import { type ODS_TIMEZONE, ODS_TIMEZONES, type OdsTimezone } from '../constant/timezones';

function formatValue(value?: string, withSeconds?: boolean): string {
  if (!withSeconds && value?.match(/:/g)?.length === 2) {
    const inputValue = value.split(':');
    return `${ inputValue[0] }:${ inputValue[1] }`;
  }

  if (withSeconds) {
    if (value?.match(/:/g)?.length === 1) {
      return `${ value }:00`;
    }
    if (value?.match(/:/g)?.length === 2) {
      return value;
    }
  }

  return '';
}

function getCurrentTimezone(currentTimezone?: OdsTimezone): OdsTimezone | undefined {
  if (!currentTimezone) {
    const browserTimezone = new Date().getTimezoneOffset() / 60 * -1;
    const parsedTimezone = browserTimezone >= 0 ? `+${browserTimezone}` : browserTimezone.toString();
    return ODS_TIMEZONES.find((timezone) => timezone.indexOf(parsedTimezone) > -1);
  }
  return currentTimezone;
}

function parseTimezones(timezones?: OdsTimezone[] | ODS_TIMEZONES_PRESET | string): OdsTimezone[] {
  if (!timezones || timezones === ODS_TIMEZONES_PRESET.All) {
    return ODS_TIMEZONES as OdsTimezone[];
  }
  if (typeof timezones === 'string') {
    try {
      const parsedTimezones = JSON.parse(timezones);
      return parsedTimezones
        .filter((parsedTimezone: string) => ODS_TIMEZONES.includes(parsedTimezone.toUpperCase() as ODS_TIMEZONE))
        .map((parsedTimezone: string) => parsedTimezone.toUpperCase());
    } catch (err) {
      console.warn('[OdsTimepicker] timezones string could not be parsed.');
      return [];
    }
  }
  return timezones;
}

function setFormValue(internals: ElementInternals, value: string | null): void {
  internals.setFormValue(value?.toString() ?? '');
}

export {
  formatValue,
  getCurrentTimezone,
  parseTimezones,
  setFormValue,
};
