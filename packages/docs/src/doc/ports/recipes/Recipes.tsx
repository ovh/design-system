import odsRecipeJson from '@ovhcloud/ods-recipes/json';
import { type ChangeEvent, useMemo, useState } from 'react';
import { DIVIDER_SPACING, Divider } from '../../../../../ods-react/src/components/divider/src';
import { FormField, FormFieldLabel } from '../../../../../ods-react/src/components/form-field/src';
import { ICON_NAME } from '../../../../../ods-react/src/components/icon/src';
import { INPUT_TYPE, Input } from '../../../../../ods-react/src/components/input/src';
import { MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '../../../../../ods-react/src/components/message/src';
import { RecipeCard, type Recipe } from './RecipeCard';
import styles from './recipes.module.css';

/* Searchable grid of ready-to-use UI patterns, from @ovhcloud/ods-recipes. */
const Recipes = ({ component, searchable = false }: { component?: string, searchable?: boolean }) => {
  const [search, setSearch] = useState('');
  const [openRecipeName, setOpenRecipeName] = useState('');

  const recipes = useMemo((): Recipe[] => {
    const map = odsRecipeJson.component as Record<string, Recipe>;
    const keys = (odsRecipeJson.list?.components ?? []) as string[];
    const all = keys.map((key) => map[key]).filter(Boolean);
    return component ? all.filter((recipe) => (recipe.odsComponents?.indexOf(component) ?? -1) > -1) : all;
  }, [component]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) {
      return recipes;
    }
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(term) || recipe.tags?.some((tag) => tag.toLowerCase().includes(term)));
  }, [recipes, search]);

  if (!recipes.length) {
    return <p>No recipe defined for now.</p>;
  }

  return (
    <div className={ styles.recipes }>
      { searchable && (
        <>
          <FormField className={ styles['recipes__search'] }>
            <FormFieldLabel>Filter recipes:</FormFieldLabel>
            <Input
              clearable
              onChange={ (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value) }
              placeholder="Keyword..."
              type={ INPUT_TYPE.text }
              value={ search } />
          </FormField>
          <Divider spacing={ DIVIDER_SPACING._48 } />
        </>
      ) }

      <div className={ styles['recipes__grid'] }>
        { filtered.length > 0 ? (
          filtered.map((recipe) => (
            <RecipeCard
              isOpen={ openRecipeName === recipe.name }
              key={ recipe.name }
              onToggle={ (name) => setOpenRecipeName((prev) => (prev === name ? '' : name)) }
              recipe={ recipe } />
          ))
        ) : (
          <Message className={ styles['recipes__grid__empty'] } color={ MESSAGE_COLOR.information } dismissible={ false }>
            <MessageIcon name={ ICON_NAME.circleInfo } />
            <MessageBody>No recipe found for "{ search }"</MessageBody>
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
