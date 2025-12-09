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

      <Card>
        <ResetTheme>
          <Tailwind />
        </ResetTheme>
      </Card>

      <h1>
        { recipe.name }
      </h1>

      <Code>
        { recipe.source['css-modules'].ts }
      </Code>

      <br /><br />

      {
        recipe.source['css-modules'].css &&
        <Code>
          { recipe.source['css-modules'].css }
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
