import type { OdsTimezone } from '../constant/timezones';

interface OdsTimepickerValueChangeEventDetail {
  currentTimezone?: OdsTimezone;
  name: string;
  previousValue?: string;
  validity?: ValidityState;
  value: string;
}

type OdsTimepickerValueChangeEvent = CustomEvent<OdsTimepickerValueChangeEventDetail>;

export {
  type OdsTimepickerValueChangeEvent,
  type OdsTimepickerValueChangeEventDetail,
};
