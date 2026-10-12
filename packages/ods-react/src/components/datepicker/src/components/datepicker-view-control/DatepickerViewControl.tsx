import { DatePicker } from '@ark-ui/react/date-picker';
import { type FC, type JSX } from 'react';
import { BUTTON_EMPHASIS, BUTTON_SIZE, Button } from '../../../../button/src';
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
          emphasis={ BUTTON_EMPHASIS.low }
          size={ BUTTON_SIZE.sm }>
          <Icon name={ ICON_NAME.chevronLeft } />
        </Button>
      </DatePicker.PrevTrigger>

      <DatePicker.ViewTrigger asChild>
        <Button
          disabled={ disabled || readOnly }
          emphasis={ BUTTON_EMPHASIS.low }
          size={ BUTTON_SIZE.sm }>
          <DatePicker.RangeText /> <Icon name={ ICON_NAME.chevronDown } />
        </Button>
      </DatePicker.ViewTrigger>

      <DatePicker.NextTrigger asChild>
        <Button
          disabled={ disabled || readOnly }
          emphasis={ BUTTON_EMPHASIS.low }
          size={ BUTTON_SIZE.sm }>
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
