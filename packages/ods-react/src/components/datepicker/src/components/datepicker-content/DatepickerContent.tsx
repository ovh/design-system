import { DatePicker, useDatePickerContext } from '@ark-ui/react/date-picker';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { useFormField } from '../../../../form-field/src';
import { DATEPICKER_VIEW } from '../../constants/datepicker-view';
import { useDatepicker } from '../../contexts/useDatepicker';
import { DatepickerViewControl } from '../datepicker-view-control/DatepickerViewControl';
import style from './datepickerContent.module.scss';

interface DatepickerContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean,
}

const DatepickerContent: FC<DatepickerContentProp> = forwardRef(({
  className,
  createPortal = true,
  ...props
}, ref): JSX.Element => {
  const { invalid } = useDatepicker();
  const { getInputProps, isUnavailable } = useDatePickerContext();
  const fieldContext = useFormField();
  const { disabled, readOnly } = getInputProps();

  return (
    <Portal disabled={ !createPortal }>
      <DatePicker.Positioner>
        <DatePicker.Content
          className={ classNames(
            style['datepicker-content'],
            { [style['datepicker-content--invalid']]: invalid || fieldContext?.invalid },
            className,
          )}
          ref={ ref }
          { ...props }>
          <DatePicker.View view={ DATEPICKER_VIEW.day }>
            <DatePicker.Context>
              {
                (datePicker) => (
                  <>
                    <DatepickerViewControl
                      disabled={ disabled }
                      readOnly={ readOnly } />

                    <DatePicker.Table className={ style['datepicker-content__table'] }>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {
                            datePicker.weekDays.map((weekDay, id) => (
                              <DatePicker.TableHeader
                                className={ style['datepicker-content__table__week-day'] }
                                key={ id }>
                                { weekDay.short }
                              </DatePicker.TableHeader>
                            ))
                          }
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>

                      <DatePicker.TableBody>
                        {
                          datePicker.weeks.map((week, id) => (
                            <DatePicker.TableRow key={ id }>
                              {
                                week.map((day, i) => (
                                  <DatePicker.TableCell
                                    key={ i }
                                    value={ day }>
                                    <DatePicker.TableCellTrigger asChild>
                                      <Button
                                        className={ style['datepicker-content__table__day'] }
                                        disabled={ disabled || readOnly || isUnavailable(day) }
                                        size={ BUTTON_SIZE.sm }
                                        variant={ BUTTON_VARIANT.ghost }>
                                        { day.day }
                                      </Button>
                                    </DatePicker.TableCellTrigger>
                                  </DatePicker.TableCell>
                                ))
                              }
                            </DatePicker.TableRow>
                          ))
                        }
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )
              }
            </DatePicker.Context>
          </DatePicker.View>

          <DatePicker.View view={ DATEPICKER_VIEW.month }>
            <DatePicker.Context>
              {
                (datePicker) => (
                  <>
                    <DatepickerViewControl
                      disabled={ disabled }
                      readOnly={ readOnly } />

                    <DatePicker.Table className={ style['datepicker-content__table'] }>
                      <DatePicker.TableBody>
                        {
                          datePicker.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                            <DatePicker.TableRow key={ id }>
                              {
                                months.map((month, i) => (
                                  <DatePicker.TableCell
                                    key={ i }
                                    value={ month.value }>
                                    <DatePicker.TableCellTrigger asChild>
                                      <Button
                                        className={ style['datepicker-content__table__month'] }
                                        disabled={ disabled || readOnly || datePicker.getMonthTableCellState(month).disabled }
                                        size={ BUTTON_SIZE.sm }
                                        variant={ BUTTON_VARIANT.ghost }>
                                        { month.label }
                                      </Button>
                                    </DatePicker.TableCellTrigger>
                                  </DatePicker.TableCell>
                                ))
                              }
                            </DatePicker.TableRow>
                          ))
                        }
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )
              }
            </DatePicker.Context>
          </DatePicker.View>

          <DatePicker.View view={ DATEPICKER_VIEW.year }>
            <DatePicker.Context>
              {
                (datePicker) => (
                  <>
                    <DatepickerViewControl
                      disabled={ disabled }
                      readOnly={ readOnly } />

                    <DatePicker.Table className={ style['datepicker-content__table'] }>
                      <DatePicker.TableBody>
                        {
                          datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                            <DatePicker.TableRow key={ id }>
                              {
                                years.map((year, i) => (
                                  <DatePicker.TableCell
                                    key={ i }
                                    value={ year.value }>
                                    <DatePicker.TableCellTrigger asChild>
                                      <Button
                                        className={ style['datepicker-content__table__year'] }
                                        disabled={ disabled || readOnly || datePicker.getYearTableCellState(year).disabled }
                                        size={ BUTTON_SIZE.sm }
                                        variant={ BUTTON_VARIANT.ghost }>
                                        { year.label }
                                      </Button>
                                    </DatePicker.TableCellTrigger>
                                  </DatePicker.TableCell>
                                ))
                              }
                            </DatePicker.TableRow>
                          ))
                        }
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )
              }
            </DatePicker.Context>
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Portal>
  );
});

DatepickerContent.displayName = 'DatepickerContent';

export {
  DatepickerContent,
  type DatepickerContentProp,
};
