import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useContext, useState } from 'react';
import { type TimezonesPreset } from '../constants/timezone-preset';
import { type Timezone } from '../constants/timezones';
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
  defaultValue?: string,
  disabled?: boolean,
  id?: string,
  invalid?: boolean,
  name?: string,
  onTimezoneChange?: (detail: TimepickerTimezoneChangeDetail) => void,
  onValueChange?: (detail: TimepickerValueChangeDetail) => void,
  readOnly?: boolean,
  required?: boolean,
  timezone?: Timezone,
  timezones?: Timezone[] | TimezonesPreset,
  value?: string,
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
