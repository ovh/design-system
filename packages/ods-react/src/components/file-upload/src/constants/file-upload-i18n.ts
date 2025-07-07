import { LOCALE } from '../../../../utils/locales';

enum FILE_UPLOAD_I18N {
  cancelButton = 'fileUpload.file.cancel.button',
  deleteButton = 'fileUpload.file.delete.button',
  progressBar = 'fileUpload.file.progressBar'
}

const TRANSLATION_FILE = {
  [FILE_UPLOAD_I18N.cancelButton]: {
    [LOCALE.de]: 'Stornieren',
    [LOCALE.en]: 'Cancel',
    [LOCALE.es]: 'Cancelar',
    [LOCALE.fr]: 'Annuler',
    [LOCALE.it]: 'Annullare',
    [LOCALE.nl]: 'Annuleren',
    [LOCALE.pl]: 'Anulować',
    [LOCALE.pt]: 'Cancelar',
  },
  [FILE_UPLOAD_I18N.deleteButton]: {
    [LOCALE.de]: 'Löschen',
    [LOCALE.en]: 'Delete',
    [LOCALE.es]: 'Eliminar',
    [LOCALE.fr]: 'Supprimer',
    [LOCALE.it]: 'Rimuovere',
    [LOCALE.nl]: 'Verwijderen',
    [LOCALE.pl]: 'Usunąć',
    [LOCALE.pt]: 'Remover',
  },
  [FILE_UPLOAD_I18N.progressBar]: {
    [LOCALE.de]: 'Hochzuladen',
    [LOCALE.en]: 'Uploading',
    [LOCALE.es]: 'Cargar',
    [LOCALE.fr]: 'Chargement',
    [LOCALE.it]: 'Caricare',
    [LOCALE.nl]: 'Uploaden',
    [LOCALE.pl]: 'Przesyłanie',
    [LOCALE.pt]: 'Carregar',
  },
};

export {
  FILE_UPLOAD_I18N,
  TRANSLATION_FILE,
};
