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
    [LOCALE.it]: 'Chiudi',
    [LOCALE.nl]: 'Sluiten',
    [LOCALE.pl]: 'Zamknij',
    [LOCALE.pt]: 'Fechar',
  },
};

export {
  MESSAGE_I18N,
  TRANSLATION,
};
