import { LOCALE } from '../../../../utils/locales';

enum FILE_UPLOAD_I18N {
  cancelButton = 'fileUpload.file.cancel.button',
  deleteButton = 'fileUpload.file.delete.button',
  progressBar = 'fileUpload.file.progressBar'
}

const TRANSLATION_FILE = {
  [FILE_UPLOAD_I18N.cancelButton]: {
    [LOCALE.de]: 'Abbrechen',
    [LOCALE.en]: 'Cancel',
    [LOCALE.es]: 'Cancelar',
    [LOCALE.fr]: 'Annuler',
    [LOCALE.it]: 'Annulla',
    [LOCALE.nl]: 'Annuleren',
    [LOCALE.pl]: 'Anuluj',
    [LOCALE.pt]: 'Cancelar',
  },
  [FILE_UPLOAD_I18N.deleteButton]: {
    [LOCALE.de]: 'Löschen',
    [LOCALE.en]: 'Delete',
    [LOCALE.es]: 'Eliminar',
    [LOCALE.fr]: 'Supprimer',
    [LOCALE.it]: 'Elimina',
    [LOCALE.nl]: 'Verwijderen',
    [LOCALE.pl]: 'Usuń',
    [LOCALE.pt]: 'Eliminar',
  },
  [FILE_UPLOAD_I18N.progressBar]: {
    [LOCALE.de]: 'Hochladen',
    [LOCALE.en]: 'Uploading',
    [LOCALE.es]: 'Cargando',
    [LOCALE.fr]: 'Chargement',
    [LOCALE.it]: 'Caricamento in Corso',
    [LOCALE.nl]: 'Uploaden',
    [LOCALE.pl]: 'Ładowanie',
    [LOCALE.pt]: 'A carregar',
  },
};

export {
  FILE_UPLOAD_I18N,
  TRANSLATION_FILE,
};
