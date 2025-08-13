import { LOCALE } from '../../../../utils/locales';

enum PHONE_NUMBER_I18N {
  countrySelect = 'phoneNumber.country.select',
}

const TRANSLATION = {
  [PHONE_NUMBER_I18N.countrySelect]: {
    [LOCALE.de]: 'Land auswählen',
    [LOCALE.en]: 'Select a country',
    [LOCALE.es]: 'Seleccione un país',
    [LOCALE.fr]: 'Sélectionner un pays',
    [LOCALE.it]: 'Seleziona un paese',
    [LOCALE.nl]: 'Selecteer een land',
    [LOCALE.pl]: 'Wybierz kraj',
    [LOCALE.pt]: 'Selecionar um país',
  },
};

export {
  PHONE_NUMBER_I18N,
  TRANSLATION,
};
