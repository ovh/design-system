import { LOCALE } from '../../../../utils/locales';

enum TABS_I18N {
  scrollLeftButton = 'tabs.scroll.left.button',
  scrollRightButton = 'tabs.scroll.right.button',
}

const TRANSLATION = {
  [TABS_I18N.scrollLeftButton]: {
    [LOCALE.de]: 'Registerkarten nach links scrollen',
    [LOCALE.en]: 'Scroll tabs left',
    [LOCALE.es]: 'Desplazar las pestañas a la izquierda',
    [LOCALE.fr]: 'Faire défiler les onglets vers la gauche',
    [LOCALE.it]: 'Scorri le schede a sinistra',
    [LOCALE.nl]: 'Tabbladen naar links scrollen',
    [LOCALE.pl]: 'Przewiń karty w lewo',
    [LOCALE.pt]: 'Deslocar os separadores para a esquerda',
  },
  [TABS_I18N.scrollRightButton]: {
    [LOCALE.de]: 'Registerkarten nach rechts scrollen',
    [LOCALE.en]: 'Scroll tabs right',
    [LOCALE.es]: 'Desplazar las pestañas a la derecha',
    [LOCALE.fr]: 'Faire défiler les onglets vers la droite',
    [LOCALE.it]: 'Scorri le schede a destra',
    [LOCALE.nl]: 'Tabbladen naar rechts scrollen',
    [LOCALE.pl]: 'Przewiń karty w prawo',
    [LOCALE.pt]: 'Deslocar os separadores para a direita',
  },
};

export {
  TABS_I18N,
  TRANSLATION,
};
