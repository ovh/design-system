import { Card, Code } from '@ovhcloud/ods-react';
import * as odsRecipePreview from '@ovhcloud/ods-recipes';
import odsRecipeJson from '@ovhcloud/ods-recipes/json';
import React, { type JSX, type ReactElement } from 'react';
import { ResetTheme } from '../../src/components/resetTheme/ResetTheme';

// TODO manage missing files (ex: no css on some example)
// TODO export type Recipe from @ovhcloud/ods-recipes

type Recipe = {
  additionalNote?: string,
  description: string,
  name: string,
  reactTag: string,
  source: {
    cssModule: {
      css?: string,
      ts: string,
    },
    tailwind: {
      ts: string,
    },
  },
  tags: string[],
}

type RecipeComponent = {
  CssModule: () => ReactElement,
  Tailwind: () => ReactElement,
}

const Recipe = ({ recipe }: { recipe: Recipe }): JSX.Element => {
  //const Preview = (odsRecipePreview as Record<string, () => ReactElement>)[recipe.reactTag];
  const { CssModule, Tailwind } = (odsRecipePreview as Record<string, RecipeComponent>)[recipe.reactTag];

  return (
    <div>
      <Card>
        <ResetTheme>
          <CssModule />
        </ResetTheme>
      </Card>

      <Card>
        <ResetTheme>
          <Tailwind />
        </ResetTheme>
      </Card>

      <h1>
        { recipe.name }
      </h1>

      <Code>
        { recipe.source.cssModule.ts }
      </Code>

      <br /><br />

      {
        recipe.source.cssModule.css &&
        <Code>
          { recipe.source.cssModule.css }
        </Code>
      }

      <br /><br />

      <Code>
        { recipe.source.tailwind.ts }
      </Code>
    </div>
  );
}

const Recipes = (): JSX.Element => {
  const RECIPES = odsRecipeJson.list?.components || [];
  const componentRecipeList: Record<string, Recipe> = odsRecipeJson.component;

  // TODO manage error or missing data

  return (
    <div>
      {
        RECIPES.map((recipe) => (
          <Recipe
            key={ recipe }
            recipe={ componentRecipeList[recipe] } />
        ))
      }
    </div>
  )
}

export { Recipes };
