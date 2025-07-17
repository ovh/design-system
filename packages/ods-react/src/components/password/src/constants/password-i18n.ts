import { LOCALE } from '../../../../utils/locales';
import { INPUT_I18N } from '../../../input/src';

const TRANSLATION = {
  [INPUT_I18N.maskButtonHide]: {
    [LOCALE.de]: 'Passwort verbergen',
    [LOCALE.en]: 'Hide password',
    [LOCALE.es]: 'Ocultar contraseña',
    [LOCALE.fr]: 'Masquer le mot de passe',
    [LOCALE.it]: 'Nascondi password',
    [LOCALE.nl]: 'Verberg wachtwoord',
    [LOCALE.pl]: 'Ukryj hasło',
    [LOCALE.pt]: 'Ocultar senha',
  },
  [INPUT_I18N.maskButtonShow]: {
    [LOCALE.de]: 'Passwort anzeigen',
    [LOCALE.en]: 'Show password',
    [LOCALE.es]: 'Mostrar contraseña',
    [LOCALE.fr]: 'Afficher le mot de passe',
    [LOCALE.it]: 'Mostra password',
    [LOCALE.nl]: 'Toon wachtwoord',
    [LOCALE.pl]: 'Pokaż hasło',
    [LOCALE.pt]: 'Mostrar senha',
  },
};

export {
  TRANSLATION,
};
