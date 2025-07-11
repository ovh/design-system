import { LOCALE } from '../../../../utils/locales';

enum BREADCRUMB_I18N {
  ellipsisButton = 'breadcrumb.ellipsis.button',
}

const TRANSLATION = {
  [BREADCRUMB_I18N.ellipsisButton]: {
    [LOCALE.de]: 'Breadcrumb-Links erweitern',
    [LOCALE.en]: 'Expand Breadcrumb links',
    [LOCALE.es]: 'Expandir enlaces de ruta de navegación',
    [LOCALE.fr]: 'Développer les liens du fil d\'Ariane',
    [LOCALE.it]: 'Espandi i collegamenti breadcrumb',
    [LOCALE.nl]: 'Breadcrumb-links uitvouwen',
    [LOCALE.pl]: 'Rozwiń linki okruszków',
    [LOCALE.pt]: 'Expandir links de navegação',
  },
};

export {
  BREADCRUMB_I18N,
  TRANSLATION,
};
