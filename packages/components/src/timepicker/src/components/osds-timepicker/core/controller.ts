import type { ODS_TIMEZONE } from '../constants/timezones';
import type { OsdsTimepicker } from '../osds-timepicker';
import { ODS_TIMEZONES } from '../constants/timezones';
import { ODS_TIMEZONES_PRESET } from '../constants/timezones-preset';

class OdsTimepickerController {

  constructor(private readonly component: OsdsTimepicker) {
  }

  formatValue(value: string, withSeconds: boolean): string {
    if (withSeconds === false && value.match(/:/g)?.length === 2) {
      const inputValue = value.split(':');
      return `${ inputValue[0] }:${ inputValue[1] }`;
    }

    if (withSeconds === true && value.match(/:/g)?.length === 1) {
      return `${ value }:00`;
    }

    return '';
  }

  handleTimezones() :void {
    const check = this.getTimezonesList();
    this.component.timezonesList = [...check] as ODS_TIMEZONE[] ;
  }

  handleCurrentTimezone() : void {
    if (!this.component.currentTimezone) {
      const browserTimezone = new Date().getTimezoneOffset() / 60 * -1;
      const parsedTimezone = browserTimezone >= 0 ? `+${browserTimezone}` : browserTimezone.toString();
      this.component.currentTimezone = ODS_TIMEZONES.find((timezone) => (timezone as string).indexOf(parsedTimezone) > 1);
    }
  }

  private getTimezonesList(): readonly ODS_TIMEZONE[] | ODS_TIMEZONES_PRESET {
    if (this.component.timezones === undefined || this.component.timezones === ODS_TIMEZONES_PRESET.All) {
      return ODS_TIMEZONES;
    }
    return this.component.timezones || [];
  }
}

export {
  OdsTimepickerController,
};
