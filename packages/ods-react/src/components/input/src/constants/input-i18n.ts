import { LOCALE } from '../../../../utils/locales';

enum INPUT_I18N {
  clearButton = 'input.clear.button',
  maskButtonHide = 'input.mask.hide.button',
  maskButtonShow = 'input.mask.show.button',
  searchButton = 'input.search.button',
}

const TRANSLATION = {
  [INPUT_I18N.clearButton]: {
    [LOCALE.de]: 'Eingabe löschen',
    [LOCALE.en]: 'Clear input',
    [LOCALE.es]: 'Borrar entrada',
    [LOCALE.fr]: 'Effacer le champ',
    [LOCALE.it]: 'Cancella input',
    [LOCALE.nl]: 'Invoer wissen',
    [LOCALE.pl]: 'Wyczyść pole',
    [LOCALE.pt]: 'Limpar campo',
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
  [INPUT_I18N.searchButton]: {
    [LOCALE.de]: 'Suchen',
    [LOCALE.en]: 'Search',
    [LOCALE.es]: 'Buscar',
    [LOCALE.fr]: 'Rechercher',
    [LOCALE.it]: 'Cerca',
    [LOCALE.nl]: 'Zoeken',
    [LOCALE.pl]: 'Szukaj',
    [LOCALE.pt]: 'Pesquisar',
  },
};

export {
  INPUT_I18N,
  TRANSLATION,
};
