import type { OdsTimezone } from '../constant/timezones';

interface OdsTimepickerValueChangeEventDetail {
  currentTimezone?: OdsTimezone;
  name: string;
  previousValue?: string | null;
  validity?: ValidityState;
  value: string | null;
}

type OdsTimepickerValueChangeEvent = CustomEvent<OdsTimepickerValueChangeEventDetail>;

export {
  type OdsTimepickerValueChangeEvent,
  type OdsTimepickerValueChangeEventDetail,
};
