import odsRecipeJson from '@ovhcloud/ods-recipes/json';
import { useMemo, useState } from 'react';
import { ICON_NAME } from '../../../../../ods-react/src/components/icon/src';
import { MESSAGE_STATUS, Message, MessageBody, MessageIcon } from '../../../../../ods-react/src/components/message/src';
import { GalleryToolbar } from '../../../componentGallery/GalleryToolbar';
import { RecipeCard, type Recipe } from './RecipeCard';
import styles from './recipes.module.css';

/* The categories the gallery toolbar filters on, one per recipe (same idea as the Component Gallery:
   the grouping lives here, and a recipe missing from it lands in "Other" instead of vanishing). */
const CATEGORIES: Record<string, string[]> = {
  'AI & conversation': ['chat'],
  'Commerce': ['feature-list-product-card', 'media-product-card', 'order-button'],
  'Data display': ['dashboard-card', 'data-grid', 'data-grid-with-query-filter', 'feature-list'],
  'Feedback & status': ['status-message', 'status-modal'],
  'Form elements': ['config-tile', 'email-field', 'range-input'],
};
const OTHER_CATEGORY = 'Other';

const categoryOf = (key: string): string => Object.entries(CATEGORIES).find(([, keys]) => keys.includes(key))?.[0] ?? OTHER_CATEGORY;

interface RecipeEntry {
  category: string;
  key: string;
  recipe: Recipe;
}

/* Searchable grid of ready-to-use UI patterns, from @ovhcloud/ods-recipes. */
const Recipes = ({ component, searchable = false }: { component?: string, searchable?: boolean }) => {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState<string[]>([]);

  const entries = useMemo((): RecipeEntry[] => {
    const map = odsRecipeJson.component as Record<string, Recipe>;
    const keys = (odsRecipeJson.list?.components ?? []) as string[];
    return keys
      .filter((key) => map[key])
      .map((key) => ({ category: categoryOf(key), key, recipe: map[key] }))
      .filter(({ recipe }) => !component || (recipe.odsComponents?.indexOf(component) ?? -1) > -1);
  }, [component]);

  const categoryItems = useMemo(
    () => [...new Set(entries.map((entry) => entry.category))]
      .sort((a, b) => (a === OTHER_CATEGORY ? 1 : b === OTHER_CATEGORY ? -1 : a.localeCompare(b)))
      .map((category) => ({ label: category, value: category })),
    [entries],
  );

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return entries
      .filter((entry) => !categories.length || categories.includes(entry.category))
      .filter(({ recipe }) => !term || recipe.name.toLowerCase().includes(term) || recipe.tags?.some((tag) => tag.toLowerCase().includes(term)));
  }, [categories, entries, search]);

  if (!entries.length) {
    return <p>No recipe defined for now.</p>;
  }

  return (
    <div className={ styles.recipes }>
      { searchable && (
        <GalleryToolbar
          categories={ categories }
          categoryItems={ categoryItems }
          filter={ search }
          noun="recipes"
          onCategoriesChange={ setCategories }
          onFilterChange={ setSearch }
          shown={ filtered.length }
          total={ entries.length } />
      ) }

      <div className={ component ? `${styles['recipes__grid']} ${styles['recipes__grid--related']}` : styles['recipes__grid'] }>
        { filtered.length > 0 ? (
          filtered.map(({ key, recipe }) => (
            <RecipeCard key={ key } level={ component ? 3 : 2 } path={ `/recipes/${key}` } recipe={ recipe } />
          ))
        ) : (
          <Message className={ styles['recipes__grid__empty'] } status={ MESSAGE_STATUS.information } dismissible={ false }>
            <MessageIcon name={ ICON_NAME.circleInfo } />
            <MessageBody>No recipe matches your filters</MessageBody>
          </Message>
        ) }
      </div>
    </div>
  );
};

/* Whether any recipe uses this component (PascalCase React name) — lets a
   caller hide an empty "Recipes" section. */
function hasRecipesFor(component: string): boolean {
  const map = odsRecipeJson.component as Record<string, Recipe>;
  const keys = (odsRecipeJson.list?.components ?? []) as string[];
  return keys.some((key) => (map[key]?.odsComponents ?? []).includes(component));
}

export { Recipes, hasRecipesFor };
