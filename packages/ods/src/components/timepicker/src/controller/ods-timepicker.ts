import type { OdsInput } from '../../../input/src';
import { setInternalsValidityFromOdsComponent } from '../../../../utils/dom';
import { ODS_TIMEZONES_PRESET } from '../constant/timezone-preset';
import { type ODS_TIMEZONE, ODS_TIMEZONES, type OdsTimezone } from '../constant/timezones';

const VALUE_DEFAULT_VALUE = null;

function formatValue(value?: string, withSeconds?: boolean): string {
  const numberOfTwoPoint = value?.match(/:/g)?.length;
  if (!withSeconds && numberOfTwoPoint) {
    if (numberOfTwoPoint === 1) {
      return value;
    }
    if (numberOfTwoPoint === 2) {
      const inputValue = value.split(':');
      return `${ inputValue[0] }:${ inputValue[1] }`;
    }
  }

  if (withSeconds && numberOfTwoPoint) {
    if (numberOfTwoPoint === 1) {
      return `${ value }:00`;
    }
    if (numberOfTwoPoint === 2) {
      return value;
    }
  }

  return '';
}

function getCurrentTimezone(currentTimezone: OdsTimezone | undefined, timezones: OdsTimezone[]): OdsTimezone | undefined {
  if (!currentTimezone) {
    const browserTimezone = new Date().getTimezoneOffset() / 60 * -1;
    const parsedTimezone = browserTimezone >= 0 ? `+${browserTimezone}` : browserTimezone.toString();

    return timezones.find((timezone) => timezone.indexOf(parsedTimezone) > -1);
  }
  return currentTimezone;
}

function getInitialValue(value: string | null, defaultValue?: string): string | null {
  if (defaultValue !== undefined && value === VALUE_DEFAULT_VALUE) {
    return defaultValue;
  }

  return value;
}

function parseTimezones(timezones?: OdsTimezone[] | ODS_TIMEZONES_PRESET | string): OdsTimezone[] {
  if (timezones === ODS_TIMEZONES_PRESET.all) {
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

  return [];
}

async function updateInternals(internals: ElementInternals, value: string | null, inputEl?: HTMLElement & OdsInput): Promise<void> {
  internals.setFormValue(value?.toString() ?? '');

  if (inputEl) {
    await setInternalsValidityFromOdsComponent(inputEl, internals);
  }
}

export {
  formatValue,
  getCurrentTimezone,
  getInitialValue,
  parseTimezones,
  updateInternals,
  VALUE_DEFAULT_VALUE,
};
