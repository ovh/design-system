import { type TimepickerProp, Timepicker as TimepickerRoot } from './components/timepicker/Timepicker';
import { TimepickerControl, type TimepickerControlProp } from './components/timepicker-control/TimepickerControl';
import { TimepickerTimezoneList, type TimepickerTimezoneListProp } from './components/timepicker-timezone-list/TimepickerTimezoneList';

const Timepicker = Object.assign(TimepickerRoot, {
  Control: TimepickerControl,
  TimezoneList: TimepickerTimezoneList,
});

export { Timepicker };
export { TimepickerControl, TimepickerTimezoneList };
export type { TimepickerProp, TimepickerControlProp, TimepickerTimezoneListProp };
export { TIMEPICKER_I18N } from './constants/timepicker-i18n';
export { TIMEZONES_PRESET, TIMEZONES_PRESETS, type TimezonesPreset } from './constants/timepicker-timezone-preset';
export { TIMEZONE, TIMEZONES, type Timezone } from './constants/timepicker-timezones';
export { type TimepickerTimezoneChangeDetail, type TimepickerValueChangeDetail } from './contexts/useTimepicker';
