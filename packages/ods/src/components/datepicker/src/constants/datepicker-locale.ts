import { ODS_LOCALE, ODS_LOCALES, type OdsLocale } from '../../../../utils/locale';

// Needed copy otherwise Stencil generate wrong types
type OdsDatepickerLocale = OdsLocale;

export {
  ODS_LOCALE as ODS_DATEPICKER_LOCALE,
  ODS_LOCALES as ODS_DATEPICKER_LOCALES,
  type OdsDatepickerLocale,
};
