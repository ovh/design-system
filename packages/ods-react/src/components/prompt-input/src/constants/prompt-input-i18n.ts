import { LOCALE } from '../../../../utils/locales';

enum PROMPT_INPUT_I18N {
  fileUploadButton = 'promptInput.fileUpload.button',
  sendButton = 'promptInput.send.button',
}

const TRANSLATION = {
  [PROMPT_INPUT_I18N.fileUploadButton]: {
    [LOCALE.de]: 'Datei anhängen',
    [LOCALE.en]: 'Attach a file',
    [LOCALE.es]: 'Adjuntar un archivo',
    [LOCALE.fr]: 'Joindre un fichier',
    [LOCALE.it]: 'Allega un file',
    [LOCALE.nl]: 'Bestand bijvoegen',
    [LOCALE.pl]: 'Załącz plik',
    [LOCALE.pt]: 'Anexar um ficheiro',
  },
  [PROMPT_INPUT_I18N.sendButton]: {
    [LOCALE.de]: 'Senden',
    [LOCALE.en]: 'Send',
    [LOCALE.es]: 'Enviar',
    [LOCALE.fr]: 'Envoyer',
    [LOCALE.it]: 'Invia',
    [LOCALE.nl]: 'Verzenden',
    [LOCALE.pl]: 'Wyślij',
    [LOCALE.pt]: 'Enviar',
  },
};

export {
  PROMPT_INPUT_I18N,
  TRANSLATION,
};
