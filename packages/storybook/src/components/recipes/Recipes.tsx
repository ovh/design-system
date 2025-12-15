import {
  Divider,
  DIVIDER_SPACING,
  FormField,
  FormFieldLabel,
  Icon,
  ICON_NAME,
  Input,
  INPUT_TYPE,
} from '@ovhcloud/ods-react';
import odsRecipeJson from '@ovhcloud/ods-recipes/json';
import React, { type ChangeEvent, type JSX, useCallback, useMemo, useState } from 'react';
import { RecipeCard, type Recipe } from '../recipeCard/RecipeCard';
import styles from './recipes.module.css';

const Recipes = ({ component }: { component?: string }): JSX.Element => {
  const [openRecipeName, setOpenRecipeName] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const recipes = useMemo((): Recipe[] => {
    const componentMap = odsRecipeJson.component as Record<string, Recipe>;
    const componentKeys = (odsRecipeJson.list?.components || []) as string[];

    const allRecipes = componentKeys
      .map((key) => componentMap[key])
      .filter(Boolean);

    if (component) {
      return allRecipes.filter((recipe) =>
        (recipe.odsComponents?.indexOf(component) ?? -1) > -1
      );
    }

    return allRecipes;
  }, [component]);

  const filteredRecipes = useMemo(() => {
    const trimmedSearch = search.trim();
    if (!trimmedSearch) {
      return recipes;
    }
    const searchLower = trimmedSearch.toLowerCase();
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchLower) ||
      recipe.description.toLowerCase().includes(searchLower)
    );
  }, [search, recipes]);

  if (!recipes || !recipes.length) {
    return (
      <p>No recipe defined for now.</p>
    );
  }

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const handleToggle = useCallback((recipeName: string) => {
    setOpenRecipeName((prev) => prev === recipeName ? null : recipeName);
  }, []);

  return (
    <div className={ styles.recipes }>
      <div className={ styles['recipes__search'] }>
        <FormField>
          <FormFieldLabel>Search for a recipe</FormFieldLabel>
          <Input
            clearable
            onChange={ handleSearchChange }
            placeholder="Name or description..."
            type={ INPUT_TYPE.search }
            value={ search }
          />
        </FormField>
      </div>

      <Divider spacing={ DIVIDER_SPACING['_48'] } />

      <div className={ styles['recipes__grid'] }>
        { filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              isOpen={ openRecipeName === recipe.name }
              key={ recipe.name }
              onToggle={ handleToggle }
              recipe={ recipe }
            />
          ))
        ) : (
          <div className={ styles['recipes__empty'] }>
            <Icon name={ ICON_NAME.circleInfo } />
            <span>No recipe found for "{ search }"</span>
          </div>
        ) }
      </div>
    </div>
  );
};

export { Recipes };
