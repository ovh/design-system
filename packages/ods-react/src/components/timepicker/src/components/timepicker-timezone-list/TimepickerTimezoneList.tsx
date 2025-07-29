import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useId, useMemo } from 'react';
import { Select, SelectContent, SelectControl, type SelectOptionItem, type SelectValueChangeDetail } from '../../../../select/src';
import { type Timezone } from '../../constants/timezones';
import { useTimepicker } from '../../contexts/useTimepicker';
import { FALLBACK_TIMEZONE, getTimezoneList } from '../../controller/timepicker';
import style from './timepickerTimezoneList.module.scss';

interface TimepickerTimezoneListProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'> {}

const TimepickerTimezoneList: FC<TimepickerTimezoneListProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const customId = useId();
  const {
    currentTimezone,
    disabled,
    invalid,
    onTimezoneChange,
    readOnly,
    required,
    setCurrentTimezone,
    timezones,
  } = useTimepicker();

  const timezoneItems = useMemo(() => {
    return getTimezoneList(timezones).map<SelectOptionItem>((timezone) => ({
      label: timezone,
      value: timezone,
    }));
  }, [timezones]);

  function onValueChange({ value }: SelectValueChangeDetail): void {
    setCurrentTimezone && setCurrentTimezone(value[0] as Timezone);

    if (onTimezoneChange) {
      onTimezoneChange({ value: value[0] as Timezone });
    }
  }

  return (
    <Select
      className={ classNames(style['timepicker-timezone-list'], className) }
      disabled={ disabled }
      invalid={ invalid }
      items={ timezoneItems }
      readOnly={ readOnly }
      required={ required }
      ref={ ref }
      onValueChange={ onValueChange }
      value={ [currentTimezone || FALLBACK_TIMEZONE] }
      { ...props }>
      <SelectControl
        className={ style['timepicker-timezone__control'] }
        id={ customId } />

      <SelectContent />
    </Select>
  );
});

TimepickerTimezoneList.displayName = 'TimepickerTimezoneList';

export {
  TimepickerTimezoneList,
  type TimepickerTimezoneListProp,
};
