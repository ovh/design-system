import type { OdsInputValueChangeEventDetail } from '../../../../../input/src';
import type { OdsDatepickerValueChangeEventDetail } from '../interfaces/events';
import type { OsdsDatepicker } from '../osds-datepicker';
import { OdsCommonFieldMethodController } from '@ovhcloud/ods-common-core';
import { Datepicker } from 'vanillajs-datepicker';

class OdsDatepickerController<T extends OsdsDatepicker> extends OdsCommonFieldMethodController<T, OdsDatepickerValueChangeEventDetail> {
  private FORMAT_TOKENS = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;

  beforeInit(): void {
    if (!this.component.value) {
      this.component.value = this.component.defaultValue;
    }
    this.component.internals.setFormValue(this.formatDate(this.component.value) ?? '');
  }

  formatDate(date?: Date | null, format?: string): string {
    if (format && date && this.isDate(date)) {
      return Datepicker.formatDate(date, format);
    }
    return '';
  }

  formatDates(dates?: Date[], format?: string): string[] | undefined {
    if (!dates) {
      return undefined;
    }

    return dates
      .map((date) => {
        if (!this.isDate(date)) {
          console.warn('One of the date argument is not a valid Date object!', date);
        }

        return this.formatDate(date, format || 'dd/mm/yyyy');
      })
      .filter((formattedDate) => !!formattedDate);
  }

  private getMidnightDate(date: Date): Date {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  }

  getPattern(format?: string): string | undefined {
    if (!format) {
      return;
    }
    const separators = format.split(this.FORMAT_TOKENS);
    const parts = format.match(new RegExp(this.FORMAT_TOKENS, 'g'));
    return parts?.map((token) => {
      // regex according to this format
      // https://mymth.github.io/vanillajs-datepicker/#/date-string+format?id=date-format
      switch (token) {
        case 'd':
        case 'm':
          return '[0-9]{1,2}';
        case 'dd':
        case 'mm':
        case 'yy' :
          return '[0-9]{2}';
        case 'D':
        case 'M':
          return '[A-Za-z]{3}';
        case 'DD':
        case 'MM':
          return '[A-Za-z]*';
        case 'y':
          return '[1-9]([0-9]{1,3})?';
        case 'yyyy':
          return '[0-9]{4}';
        default:
          return '';
      }
    }).reduce((acc, current, index) => acc = `${acc}${separators[index]}${current}`, '' as string);
  }

  isDate(date: Date): boolean {
    // Needed as value from runtime are not TS problem anymore
    return date instanceof Date && !isNaN(date.valueOf());
  }

  onChange(newValue: Date | null): void {
    if(!this.component.disabled) {
      this.component.value = this.updateDatepickerDate(newValue);
      this.component.internals.setFormValue(this.formatDate(this.component.value, this.component.format));
      this.component.hasFocus = false;
    }
  }

  onOdsValueChange(detail: OdsInputValueChangeEventDetail): void {
    if (this.component.format) {
      const date = this.updateDatepickerDate(detail.value ? new Date(Datepicker.parseDate(detail.value, this.component.format)) : null);
      const formattedValue = this.formatDate(date, this.component.format);
      this.component.odsValueChange.emit({
        ...detail,
        formattedValue,
        oldValue: detail.oldValue ? new Date(Datepicker.parseDate(detail.oldValue, this.component.format)) : null,
        value: date,
      });
    }
    this.component.error = !detail.validity?.valid;
    this.component.internals.setFormValue(detail.value?.toString() ?? '');
  }

  private updateDatepickerDate(date: Date | null): Date | null {
    if (this.validateValue(date)) {
      this.component.datepickerInstanceAccessor?.setDate(date);
      return date;
    }

    this.component.datepickerInstanceAccessor?.setDate({ clear: true });
    return null;
  }

  private validateValue(value?: Date | null | undefined): boolean {
    if (!value || !this.isDate(value)) {
      return false;
    }

    const midnightValue = this.getMidnightDate(value).getTime();

    if (this.component.datesDisabled && this.component.datesDisabled.some((d) => this.getMidnightDate(d).getTime() === midnightValue)) {
      return false;
    }

    if (this.component.daysOfWeekDisabled && this.component.daysOfWeekDisabled.includes(value.getDay())) {
      return false;
    }

    if (this.component.maxDate && midnightValue > this.getMidnightDate(this.component.maxDate).getTime()) {
      return false;
    }

    if (this.component.minDate && midnightValue < this.getMidnightDate(this.component.minDate).getTime()) {
      return false;
    }

    return true;
  }
}

export {
  OdsDatepickerController,
};
