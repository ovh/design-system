import { DATEPICKER_I18N, Datepicker, DatepickerContent, DatepickerControl } from '../../src';

export default {
  component: Datepicker,
  title: 'Tests accessibility',
};

export const French = () => (
  <Datepicker
    defaultOpen
    defaultValue={ new Date(2026, 8, 15) }
    disabledDates={ [new Date(2026, 8, 16)] }
    locale="fr">
    <DatepickerControl />
    <DatepickerContent createPortal={ false } />
  </Datepicker>
);

export const OverriddenLabel = () => (
  <Datepicker
    defaultOpen
    defaultValue={ new Date(2026, 8, 15) }
    i18n={{ [DATEPICKER_I18N.nextMonthButton]: 'Go to next month' }}
    locale="fr">
    <DatepickerControl />
    <DatepickerContent createPortal={ false } />
  </Datepicker>
);
