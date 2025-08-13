import { LOCALE } from '../../../../utils/locales';

enum TIMEPICKER_I18N {
  timezoneSelect = 'timepicker.timezone.select',
}

const TRANSLATION = {
  [TIMEPICKER_I18N.timezoneSelect]: {
    [LOCALE.de]: 'Zeitzone auswählen',
    [LOCALE.en]: 'Select a timezone',
    [LOCALE.es]: 'Seleccione una franja horaria',
    [LOCALE.fr]: 'Sélectionner un fuseau horaire',
    [LOCALE.it]: 'Seleziona un fuso orario',
    [LOCALE.nl]: 'Selecteer een tijdzone',
    [LOCALE.pl]: 'Wybierz strefę czasową',
    [LOCALE.pt]: 'Selecionar um fuso horário',
  },
};

export {
  TIMEPICKER_I18N,
  TRANSLATION,
};
