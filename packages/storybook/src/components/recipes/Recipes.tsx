import { Card, Code } from '@ovhcloud/ods-react';
import * as odsRecipePreview from '@ovhcloud/ods-recipes';
import { type ComponentMetadataWithSources, type ComponentRecipe } from '@ovhcloud/ods-recipes';
import odsRecipeJson from '@ovhcloud/ods-recipes/json';
import React, { type JSX, useMemo } from 'react';
import { ResetTheme } from '../resetTheme/ResetTheme';

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

// TODO manage error or missing data
const Recipes = ({ component }: { component?: string }): JSX.Element => {
  const recipes = useMemo(() => {
    if (component) {
      return Object.keys(odsRecipeJson.component)
        .filter((key) => odsRecipeJson.component[key].odsComponents.indexOf(component) > -1)
    }

    return odsRecipeJson.list?.components || [];
  }, [component]);

  const componentRecipeList = odsRecipeJson.component as Record<string, ComponentMetadataWithSources>;

  if (!recipes || !recipes.length) {
    return (
      <p>No recipe defined for now.</p>
    );
  }

  return (
    <div>
      {
        recipes.map((recipe) => (
          <Recipe
            key={ recipe }
            recipe={ componentRecipeList[recipe] } />
        ))
      }
    </div>
  )
}

export { Recipes };
