import type { OdsTimezone } from '../constant/timezones';

interface OdsTimepickerChangeEventDetail {
  currentTimezone?: OdsTimezone;
  name: string;
  previousValue?: string | null;
  validity?: ValidityState;
  value: string | null;
}

type OdsTimepickerChangeEvent = CustomEvent<OdsTimepickerChangeEventDetail>;

export {
  type OdsTimepickerChangeEvent,
  type OdsTimepickerChangeEventDetail,
};
