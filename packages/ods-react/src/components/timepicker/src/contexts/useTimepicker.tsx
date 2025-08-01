import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useContext, useState } from 'react';
import { type Locale } from '../../../../utils/locales';
import { type TIMEPICKER_I18N } from '../constants/timepicker-i18n';
import { type TimezonesPreset } from '../constants/timepicker-timezone-preset';
import { type Timezone } from '../constants/timepicker-timezones';
import { getCurrentTimezone } from '../controller/timepicker';

interface TimepickerTimezoneChangeDetail {
  /** @type=TIMEZONE */
  value: Timezone,
}

interface TimepickerValueChangeDetail {
  /** @type=TIMEZONE */
  timezone?: Timezone,
  value: string,
}

type TimepickerRootProp = {
  /**
   * The initial time value. Use when you don't need to control the value of the timepicker.
   */
  defaultValue?: string,
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Internal translations override.
   */
  i18n?: Partial<Record<TIMEPICKER_I18N, string>>,
  /**
   * The field id.
   */
  id?: string,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the timezone changes.
   */
  onTimezoneChange?: (detail: TimepickerTimezoneChangeDetail) => void,
  /**
   * Callback fired when the value changes.
   */
  onValueChange?: (detail: TimepickerValueChangeDetail) => void,
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean,
  /**
   * Whether the component is required.
   */
  required?: boolean,
  /**
   * The controlled selected timezone.
   */
  timezone?: Timezone,
  /**
   * A specific or preset list of timezone to display in the selector.
   */
  timezones?: Timezone[] | TimezonesPreset,
  /**
   * The controlled timepicker value.
   */
  value?: string,
  /**
   * Whether the time input allows seconds selection.
   */
  withSeconds?: boolean,
}

type TimepickerInputProp = Omit<ComponentPropsWithRef<'input'>, 'type' | keyof TimepickerRootProp>

type TimepickerContextType = TimepickerRootProp & {
  currentTimezone?: Timezone,
  setCurrentTimezone?: (value: Timezone) => void,
}

interface TimepickerProviderProp extends TimepickerContextType {
  children: ReactNode,
}

const TimepickerContext = createContext<TimepickerContextType>({});

function TimepickerProvider({ children, timezone, timezones, ...prop }: TimepickerProviderProp): JSX.Element {
  const [currentTimezone, setCurrentTimezone] = useState(getCurrentTimezone(timezone, timezones));

  return (
    <TimepickerContext.Provider value={{
      ...prop,
      currentTimezone,
      setCurrentTimezone,
      timezones,
    }}>
      { children }
    </TimepickerContext.Provider>
  );
}

function useTimepicker(): TimepickerContextType {
  return useContext(TimepickerContext);
}

export {
  type TimepickerContextType,
  type TimepickerInputProp,
  TimepickerProvider,
  type TimepickerRootProp,
  type TimepickerTimezoneChangeDetail,
  type TimepickerValueChangeDetail,
  useTimepicker,
};
