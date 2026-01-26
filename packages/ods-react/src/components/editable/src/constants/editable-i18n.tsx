import { LOCALE } from '../../../../utils/locales';

enum EDITABLE_I18N {
  cancelButton = 'editable.actions.cancel.button',
  editButton = 'editable.actions.edit.button',
  submitButton = 'editable.actions.submit.button',
}

const TRANSLATION = {
  [EDITABLE_I18N.cancelButton]: {
    [LOCALE.de]: 'Abbrechen',
    [LOCALE.en]: 'Cancel',
    [LOCALE.es]: 'Cancelar',
    [LOCALE.fr]: 'Annuler',
    [LOCALE.it]: 'Annulla',
    [LOCALE.nl]: 'Annuleren',
    [LOCALE.pl]: 'Anuluj',
    [LOCALE.pt]: 'Cancelar',
  },
  [EDITABLE_I18N.editButton]: {
    [LOCALE.de]: 'Bearbeiten',
    [LOCALE.en]: 'Edit',
    [LOCALE.es]: 'Editar',
    [LOCALE.fr]: 'Modifier',
    [LOCALE.it]: 'Modifica',
    [LOCALE.nl]: 'Bewerken',
    [LOCALE.pl]: 'Edytuj',
    [LOCALE.pt]: 'Editar',
  },
  [EDITABLE_I18N.submitButton]: {
    [LOCALE.de]: 'Einreichen',
    [LOCALE.en]: 'Submit',
    [LOCALE.es]: 'Enviar',
    [LOCALE.fr]: 'Envoyer',
    [LOCALE.it]: 'Invia',
    [LOCALE.nl]: 'Indienen',
    [LOCALE.pl]: 'Zatwierdź',
    [LOCALE.pt]: 'Enviar',
  },
};

export {
  EDITABLE_I18N,
  TRANSLATION,
};
