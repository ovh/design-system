import { type JSX, useId } from 'react';
import { Combobox, ComboboxContent, ComboboxControl, INPUT_TYPE, Input } from '../ods';
import styles from './galleryToolbar.module.css';

interface GalleryToolbarProp {
  categories: string[];
  categoryItems: { label: string, value: string }[];
  filter: string;
  /* Plural noun of what is listed, e.g. "components". */
  noun: string;
  onCategoriesChange: (categories: string[]) => void;
  onFilterChange: (filter: string) => void;
  shown: number;
  total: number;
}

/* Name filter + multi-select category filter + "shown / total" count, shared by the Component
   and Recipe galleries. No category selected means every category. */
const GalleryToolbar = ({ categories, categoryItems, filter, noun, onCategoriesChange, onFilterChange, shown, total }: GalleryToolbarProp): JSX.Element => {
  const categoryId = useId();

  return (
    <div className={ styles['gallery-toolbar'] }>
      <Input
        aria-label={ `Filter ${noun}` }
        className={ styles['gallery-toolbar__filter'] }
        clearable
        onChange={ (event) => onFilterChange(event.target.value) }
        onClear={ () => onFilterChange('') }
        placeholder={ `Filter ${total} ${noun}` }
        type={ INPUT_TYPE.search }
        value={ filter } />

      { /* ComboboxControl puts aria-label on its wrapper, not on its input: name the input through its id. */ }
      <label className="sr-only" htmlFor={ categoryId }>Filter by category</label>
      <Combobox
        allowCustomValue={ false }
        items={ categoryItems }
        multiple
        onValueChange={ ({ value }) => onCategoriesChange(value) }
        value={ categories }>
        <ComboboxControl
          id={ categoryId }
          placeholder="All categories" />
        <ComboboxContent />
      </Combobox>

      <span className={ styles['gallery-toolbar__count'] }>
        { shown } / { total }
      </span>
    </div>
  );
};

export { GalleryToolbar };
