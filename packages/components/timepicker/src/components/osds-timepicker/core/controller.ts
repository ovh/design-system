import type { OsdsTimepicker } from '../osds-timepicker';
import { ODS_TIMEZONE, ODS_TIMEZONES } from '../constants/timezones';
import { ODS_TIMEZONES_PRESET } from '../constants/timezones-preset';

class OdsTimepickerController {

  constructor(private readonly component: OsdsTimepicker) {
  }

  checkSeconds(withSeconds: boolean) {
    if (withSeconds === false && (this.component.input as HTMLInputElement)?.value.match(/:/g)?.length === 2) {
      const inputValue = (this.component.input as HTMLInputElement).value.split(':');
      (this.component.input as HTMLInputElement).value = `${inputValue[0]}:${inputValue[1]}`
    } else if (withSeconds === true && (this.component.input as HTMLInputElement)?.value.match(/:/g)?.length === 1) {
      (this.component.input as HTMLInputElement).value = `${(this.component.input as HTMLInputElement).value}:00`
    }
  }

  handleTimezones () {
    const check = this.getTimezonesList();
    this.component.timezonesList = [...check] as ODS_TIMEZONE[] ;
  }

  handleCurrentTimezone () {
    if (!this.component.currentTimezone) {
      const browserTimezone = new Date().getTimezoneOffset() / 60 * -1;
      const parsedTimezone = browserTimezone >= 0 ? `+${browserTimezone}` : browserTimezone.toString();
      this.component.currentTimezone = ODS_TIMEZONES.find((timezone) => (timezone as string).indexOf(parsedTimezone) > 1)
    }
  }

  private getTimezonesList(): readonly (ODS_TIMEZONE | string)[] {
    if (this.component.timezones === undefined || this.component.timezones === ODS_TIMEZONES_PRESET.All) {
      return ODS_TIMEZONES;
    }
    return this.component.timezones || [];
  }
}

export {
  OdsTimepickerController,
};
