import { LOCALE } from '../../../../utils/locales';

enum PHONE_NUMBER_I18N {
  countrySelect = 'phoneNumber.country.select',
}

const TRANSLATION = {
  [PHONE_NUMBER_I18N.countrySelect]: {
    [LOCALE.de]: 'Land auswählen',
    [LOCALE.en]: 'Select a country',
    [LOCALE.es]: 'Seleccionar un país',
    [LOCALE.fr]: 'Sélectionner un pays',
    [LOCALE.it]: 'Selezionare un paese',
    [LOCALE.nl]: 'Selecteer een land',
    [LOCALE.pl]: 'Wybrać kraj',
    [LOCALE.pt]: 'Selecione um país',
  },
};

export {
  PHONE_NUMBER_I18N,
  TRANSLATION,
};
