import { DatePicker } from '@ark-ui/react/date-picker';
import { type FC, type JSX } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import style from './datepickerViewControl.module.scss';

interface DatepickerViewControlProp {
  disabled?: boolean,
  readOnly?: boolean,
}

const DatepickerViewControl: FC<DatepickerViewControlProp> = ({
  disabled,
  readOnly,
}): JSX.Element => {
  return (
    <DatePicker.ViewControl className={ style['datepicker-view-control'] }>
      <DatePicker.PrevTrigger asChild>
        <Button
          disabled={ disabled || readOnly }
          size={ BUTTON_SIZE.sm }
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.chevronLeft } />
        </Button>
      </DatePicker.PrevTrigger>

      <DatePicker.ViewTrigger asChild>
        <Button
          disabled={ disabled || readOnly }
          size={ BUTTON_SIZE.sm }
          variant={ BUTTON_VARIANT.ghost }>
          <DatePicker.RangeText /> <Icon name={ ICON_NAME.chevronDown } />
        </Button>
      </DatePicker.ViewTrigger>

      <DatePicker.NextTrigger asChild>
        <Button
          disabled={ disabled || readOnly }
          size={ BUTTON_SIZE.sm }
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.chevronRight } />
        </Button>
      </DatePicker.NextTrigger>
    </DatePicker.ViewControl>
  );
};

DatepickerViewControl.displayName = 'DatepickerViewControl';

export {
  DatepickerViewControl,
  type DatepickerViewControlProp,
};
