import { LOCALE } from '../../../../utils/locales';

enum TIMEPICKER_I18N {
  timezoneSelect = 'timepicker.timezone.select',
}

const TRANSLATION = {
  [TIMEPICKER_I18N.timezoneSelect]: {
    [LOCALE.de]: 'Wählen Sie eine Zeitzone aus',
    [LOCALE.en]: 'Select a timezone',
    [LOCALE.es]: 'Seleccione una zona horaria',
    [LOCALE.fr]: 'Sélectionner un fuseau horaire',
    [LOCALE.it]: 'Seleziona un fuso orario',
    [LOCALE.nl]: 'Selecteer een tijdzone',
    [LOCALE.pl]: 'Wybierz strefę czasową',
    [LOCALE.pt]: 'Selecione um fuso horário',
  },
};

export {
  TIMEPICKER_I18N,
  TRANSLATION,
};
