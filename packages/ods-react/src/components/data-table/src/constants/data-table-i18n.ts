import { LOCALE } from '../../../../utils/locales';

enum DATA_TABLE_I18N {
  sortableColumn = 'dataTable.column.sortable',
}

const TRANSLATION = {
  [DATA_TABLE_I18N.sortableColumn]: {
    [LOCALE.de]: 'Sortierbare Spalte',
    [LOCALE.en]: 'Sortable column',
    [LOCALE.es]: 'Columna ordenable',
    [LOCALE.fr]: 'Colonne triable',
    [LOCALE.it]: 'Colonna ordinabile',
    [LOCALE.nl]: 'Sorteerbare kolom',
    [LOCALE.pl]: 'Kolumna z możliwością sortowania',
    [LOCALE.pt]: 'Coluna ordenável',
  },
};

export {
  DATA_TABLE_I18N,
  TRANSLATION,
};
