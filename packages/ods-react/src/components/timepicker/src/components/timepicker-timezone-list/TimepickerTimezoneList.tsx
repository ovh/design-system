import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useId, useMemo } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { Select, SelectContent, SelectControl, type SelectOptionItem, type SelectValueChangeDetail } from '../../../../select/src';
import { TIMEPICKER_I18N, TRANSLATION } from '../../constants/timepicker-i18n';
import { type Timezone } from '../../constants/timepicker-timezones';
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
    i18n,
    invalid,
    locale,
    onTimezoneChange,
    readOnly,
    required,
    setCurrentTimezone,
    timezones,
  } = useTimepicker();
  const { translate } = useI18n(TRANSLATION, locale, i18n);

  const timezoneItems = useMemo(() => {
    return getTimezoneList(timezones).map<SelectOptionItem>((timezone) => ({
      label: timezone,
      value: timezone,
    }));
  }, [timezones]);

  function onValueChange({ value }: SelectValueChangeDetail): void {
    setCurrentTimezone(value[0] as Timezone);

    if (onTimezoneChange) {
      onTimezoneChange({ value: value[0] as Timezone });
    }
  }

  return (
    <Select
      className={ classNames(style['timepicker-timezone-list'], className) }
      data-ods="timepicker-timezone-list"
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
        aria-label={ translate(TIMEPICKER_I18N.timezoneSelect) }
        aria-labelledby=""
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
