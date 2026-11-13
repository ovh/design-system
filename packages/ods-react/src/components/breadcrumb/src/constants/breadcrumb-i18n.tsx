import { LOCALE } from '../../../../utils/locales';

enum BREADCRUMB_I18N {
  ellipsisButton = 'breadcrumb.ellipsis.button',
  navigation = 'breadcrumb.navigation',
}

const TRANSLATION = {
  [BREADCRUMB_I18N.ellipsisButton]: {
    [LOCALE.de]: 'Breadcrumb-Links erweitern',
    [LOCALE.en]: 'Expand Breadcrumb links',
    [LOCALE.es]: 'Expandir enlaces de ruta de navegación',
    [LOCALE.fr]: 'Développer les liens du fil d\'Ariane',
    [LOCALE.it]: 'Espandi i link di Breadcrumb',
    [LOCALE.nl]: 'Breadcrumb-koppelingen uitvouwen',
    [LOCALE.pl]: 'Rozwiń linki ścieżki nawigacyjnej',
    [LOCALE.pt]: 'Expandir links Breadcrumb',
  },
  [BREADCRUMB_I18N.navigation]: {
    [LOCALE.de]: 'Breadcrumb',
    [LOCALE.en]: 'Breadcrumb',
    [LOCALE.es]: 'Ruta de navegación',
    [LOCALE.fr]: 'Fil d\'Ariane',
    [LOCALE.it]: 'Breadcrumb',
    [LOCALE.nl]: 'Breadcrumb',
    [LOCALE.pl]: 'Ścieżka nawigacyjna',
    [LOCALE.pt]: 'Breadcrumb',
  },
};

export {
  BREADCRUMB_I18N,
  TRANSLATION,
};
