import type { OdsInputValueChangeEvent } from '../../../../../input/src';
import type { ODS_TIMEZONE } from '../constants/timezones';
import type { OsdsTimepicker } from '../osds-timepicker';
import { OdsCommonFieldMethodController } from '@ovhcloud/ods-common-core';
import { ODS_TIMEZONES } from '../constants/timezones';
import { ODS_TIMEZONES_PRESET } from '../constants/timezones-preset';

class OdsTimepickerController<T extends OsdsTimepicker> extends OdsCommonFieldMethodController<T> {
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
    const check = this.parseTimezones(this.getTimezonesList());
    this.component.timezonesList = check;
  }

  parseTimezones(timezones: readonly ODS_TIMEZONE[] | ODS_TIMEZONES_PRESET | string): ODS_TIMEZONE[] {
    if (typeof timezones === 'string') {
      try {
        let parsedTimezones = JSON.parse(timezones);
        parsedTimezones = parsedTimezones.filter(
          (parsedTimezone: string) => ODS_TIMEZONES.find((timezone: string) => timezone === parsedTimezone.toUpperCase())).map((parsedTimezone: string) => parsedTimezone.toUpperCase());
        return parsedTimezones;
      } catch (err) {
        this.component.logger.warn('[OsdsTimepicker] timezones string could not be parsed.');
        return [];
      }
    }
    return timezones as ODS_TIMEZONE[];
  }

  handleCurrentTimezone() : void {
    if (!this.component.currentTimezone) {
      const browserTimezone = new Date().getTimezoneOffset() / 60 * -1;
      const parsedTimezone = browserTimezone >= 0 ? `+${browserTimezone}` : browserTimezone.toString();
      this.component.currentTimezone = ODS_TIMEZONES.find((timezone) => timezone.indexOf(parsedTimezone) > -1);
    }
  }

  onValueChange({ detail }: OdsInputValueChangeEvent): void {
    if((detail.value as string)?.indexOf('UTC') > -1) {
      this.component.currentTimezone = ODS_TIMEZONES.find((timezone: string) => timezone === detail.value?.toString());
      return;
    }

    this.component.value = detail.value?.toString() ?? null;
    this.component.internals?.setFormValue?.(this.component.value?.toString() ?? '');
  }

  private getTimezonesList(): readonly ODS_TIMEZONE[] | ODS_TIMEZONES_PRESET | string {
    if (this.component.timezones === undefined || this.component.timezones === ODS_TIMEZONES_PRESET.All) {
      return ODS_TIMEZONES;
    }
    return this.component.timezones || [];
  }
}

export {
  OdsTimepickerController,
};
