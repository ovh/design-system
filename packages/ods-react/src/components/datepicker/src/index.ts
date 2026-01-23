import { type DatepickerProp, Datepicker as DatepickerRoot } from './components/datepicker/Datepicker';
import { DatepickerContent, type DatepickerContentProp } from './components/datepicker-content/DatepickerContent';
import { DatepickerControl, type DatepickerControlProp } from './components/datepicker-control/DatepickerControl';

const Datepicker = Object.assign(DatepickerRoot, {
  Content: DatepickerContent,
  Control: DatepickerControl,
});

export { Datepicker };
export { DatepickerContent, DatepickerControl };
export type { DatepickerProp, DatepickerContentProp, DatepickerControlProp };
export { DATEPICKER_DAY, DATEPICKER_DAYS, type DatepickerDay } from './constants/datepicker-day';
export { DATEPICKER_VIEW, DATEPICKER_VIEWS, type DatepickerView } from './constants/datepicker-view';
export { type DatepickerFormatterArg, type DatepickerValueChangeDetail } from './contexts/useDatepicker';
