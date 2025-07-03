import { LOCALE } from '../../../../utils/locales';

enum MODAL_I18N {
  closeButton = 'modal.close.button',
}

const TRANSLATION = {
  [MODAL_I18N.closeButton]: {
    [LOCALE.de]: 'Schließen',
    [LOCALE.en]: 'Close',
    [LOCALE.es]: 'Cerrar',
    [LOCALE.fr]: 'Fermer',
    [LOCALE.it]: 'Chiudere',
    [LOCALE.nl]: 'Sluiten',
    [LOCALE.pl]: 'Zamknąć',
    [LOCALE.pt]: 'Fechar',
  },
};

export {
  MODAL_I18N,
  TRANSLATION,
};
