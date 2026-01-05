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
    [LOCALE.de]: 'TODO',
    [LOCALE.en]: 'TODO',
    [LOCALE.es]: 'TODO',
    [LOCALE.fr]: 'TODO',
    [LOCALE.it]: 'TODO',
    [LOCALE.nl]: 'TODO',
    [LOCALE.pl]: 'TODO',
    [LOCALE.pt]: 'TODO',
  },
  [EDITABLE_I18N.submitButton]: {
    [LOCALE.de]: 'TODO',
    [LOCALE.en]: 'TODO',
    [LOCALE.es]: 'TODO',
    [LOCALE.fr]: 'TODO',
    [LOCALE.it]: 'TODO',
    [LOCALE.nl]: 'TODO',
    [LOCALE.pl]: 'TODO',
    [LOCALE.pt]: 'TODO',
  },
};

export {
  EDITABLE_I18N,
  TRANSLATION,
};
