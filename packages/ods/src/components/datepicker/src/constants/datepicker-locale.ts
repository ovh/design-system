// import { ODS_LOCALE, ODS_LOCALES, type OdsLocale } from '../../../../utils/locale';
//
// export { ODS_LOCALE as ODS_DATEPICKER_LOCALE, ODS_LOCALES as ODS_DATEPICKER_LOCALES, type OdsLocale as OdsDatepickerLocale };
import {
  ODS_LOCALE,// as ODS_DATEPICKER_LOCALE,
  ODS_LOCALES,// as ODS_DATEPICKER_LOCALES,
  type OdsLocale,// as OdsDatepickerLocale,
} from '../../../../utils/locale';

const ODS_DATEPICKER_LOCALE = ODS_LOCALE;
const ODS_DATEPICKER_LOCALES = ODS_LOCALES;

type OdsDatepickerLocale = OdsLocale;

export { ODS_DATEPICKER_LOCALE, ODS_DATEPICKER_LOCALES, type OdsDatepickerLocale };
