import { LOCALE } from '../../../../utils/locales';

enum INPUT_I18N {
  clearButton = 'input.clear.button',
  maskButtonHide = 'input.mask.hide.button',
  maskButtonShow = 'input.mask.show.button',
  searchButton = 'input.search.button',
}

const TRANSLATION = {
  [INPUT_I18N.clearButton]: {
    [LOCALE.de]: 'Eingabe löschen',
    [LOCALE.en]: 'Clear input',
    [LOCALE.es]: 'Borrar entrada',
    [LOCALE.fr]: 'Effacer le champ',
    [LOCALE.it]: 'Cancella input',
    [LOCALE.nl]: 'Invoer wissen',
    [LOCALE.pl]: 'Wyczyść pole',
    [LOCALE.pt]: 'Limpar campo',
  },
  [INPUT_I18N.maskButtonHide]: {
    [LOCALE.de]: 'Verbergen',
    [LOCALE.en]: 'Hide',
    [LOCALE.es]: 'Ocultar',
    [LOCALE.fr]: 'Masquer',
    [LOCALE.it]: 'Nascondere',
    [LOCALE.nl]: 'Verbergen',
    [LOCALE.pl]: 'Ukryć',
    [LOCALE.pt]: 'Ocultar',
  },
  [INPUT_I18N.maskButtonShow]: {
    [LOCALE.de]: 'Zeigen',
    [LOCALE.en]: 'Show',
    [LOCALE.es]: 'Mostrar',
    [LOCALE.fr]: 'Afficher',
    [LOCALE.it]: 'Mostrared',
    [LOCALE.nl]: 'Tonen',
    [LOCALE.pl]: 'Pokazać',
    [LOCALE.pt]: 'Mostrar',
  },
  [INPUT_I18N.searchButton]: {
    [LOCALE.de]: 'Suchen',
    [LOCALE.en]: 'Search',
    [LOCALE.es]: 'Buscar',
    [LOCALE.fr]: 'Rechercher',
    [LOCALE.it]: 'Cerca',
    [LOCALE.nl]: 'Zoeken',
    [LOCALE.pl]: 'Szukaj',
    [LOCALE.pt]: 'Pesquisar',
  },
};

export {
  INPUT_I18N,
  TRANSLATION,
};
