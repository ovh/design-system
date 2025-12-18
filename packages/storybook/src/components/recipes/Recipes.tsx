import {
  DIVIDER_SPACING,
  Divider,
  FormField,
  FormFieldLabel,
  ICON_NAME,
  INPUT_TYPE,
  Input,
  MESSAGE_COLOR,
  Message,
  MessageBody,
  MessageIcon,
} from '@ovhcloud/ods-react';
import odsRecipeJson from '@ovhcloud/ods-recipes/json';
import React, { type ChangeEvent, type JSX, useMemo, useState } from 'react';
import { RecipeCard, type Recipe } from '../recipeCard/RecipeCard';
import styles from './recipes.module.css';

type RecipesProp = {
  component?: string;
  searchable?: boolean;
}

const Recipes = ({ component, searchable = false }: RecipesProp): JSX.Element => {
  const [openRecipeName, setOpenRecipeName] = useState('');
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
      recipe.tags?.some((tag) =>
        tag.toLowerCase().includes(searchLower)
      )
    );
  }, [recipes, search]);

  if (!recipes || !recipes.length) {
    return (
      <p>No recipe defined for now.</p>
    );
  }

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleToggle(recipeName: string) {
    setOpenRecipeName((prev) => prev === recipeName ? '' : recipeName);
  }

  return (
    <div className={ styles.recipes }>
      { searchable && (
        <>
          <FormField className={ styles['recipes__search'] }>
            <FormFieldLabel>Filter recipes:</FormFieldLabel>

            <Input
              clearable
              data-storybook="input-search"
              onChange={ handleSearchChange }
              placeholder="Keyword..."
              type={ INPUT_TYPE.text }
              value={ search } />
          </FormField>

          <Divider spacing={ DIVIDER_SPACING._48 } />
        </>
      ) }

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
            <Message
              className={ styles['recipes__grid__empty'] }
              color={ MESSAGE_COLOR.information }
              dismissible={ false }
            >
              <MessageIcon name={ ICON_NAME.circleInfo } />
              <MessageBody>
                No recipe found for "{ search }"
              </MessageBody>
            </Message>
        ) }
      </div>
    </div>
  );
};

export { Recipes };
