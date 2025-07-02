import { LOCALE } from '../../../../utils/locales';

enum MESSAGE_I18N {
  closeButton = 'message.close.button',
}

const TRANSLATION = {
  [MESSAGE_I18N.closeButton]: {
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
  MESSAGE_I18N,
  TRANSLATION,
};
