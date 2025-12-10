import { Card, Code } from '@ovhcloud/ods-react';
import * as odsRecipePreview from '@ovhcloud/ods-recipes';
import { type ComponentMetadataWithSources, type ComponentRecipe } from '@ovhcloud/ods-recipes';
import odsRecipeJson from '@ovhcloud/ods-recipes/json';
import React, { type JSX } from 'react';
import { ResetTheme } from '../../src/components/resetTheme/ResetTheme';

const Recipe = ({ recipe }: { recipe: ComponentMetadataWithSources }): JSX.Element => {
  const { CssModule, Tailwind } = (odsRecipePreview as unknown as Record<string, ComponentRecipe>)[recipe.reactTag];

  return (
    <div>
      <Card>
        <ResetTheme>
          <CssModule />
        </ResetTheme>
      </Card>

      {
        Tailwind &&
        <Card>
          <ResetTheme>
            <Tailwind />
          </ResetTheme>
        </Card>
      }

      <h1>
        { recipe.name }
      </h1>

      {
        Object.values(recipe.source['css-modules']).map((source, i) => (
          <Code key={ i }>
            { source }
          </Code>
        ))
      }

      {
        !!recipe.source['tailwind'] && Object.values(recipe.source['tailwind']).map((source, i) => (
          <Code key={ i }>
            { source }
          </Code>
        ))
      }
    </div>
  );
}

const Recipes = (): JSX.Element => {
  const RECIPES = odsRecipeJson.list?.components || [];
  const componentRecipeList = odsRecipeJson.component as Record<string, ComponentMetadataWithSources>;

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
