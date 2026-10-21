import lightThemeTokens from '@ovhcloud/ods-themes/default/tokens';
import { useMemo } from 'react';
import { TOKEN_CATEGORY } from '../constants/designTokens';
import { categorizeTokens, declaredTokens, splitPaletteTokens } from '../helpers/designTokens';
import { Text } from '../../../ods';
import { Heading } from '../../DocComponents';
import { ColorPalette } from './colorPalette/ColorPalette';
import { TokensTable } from './tokensTable/TokensTable';

const SECTIONS: [string, TOKEN_CATEGORY][] = [
  ['Color', TOKEN_CATEGORY.color],
  ['Size', TOKEN_CATEGORY.size],
  ['Font', TOKEN_CATEGORY.font],
  ['Focus', TOKEN_CATEGORY.focus],
  ['Elevation', TOKEN_CATEGORY.elevation],
  ['Motion', TOKEN_CATEGORY.motion],
  ['Other', TOKEN_CATEGORY.other],
];

const DesignTokens = () => {
  const tokenByCategory = useMemo(() => {
    return categorizeTokens(declaredTokens(lightThemeTokens));
  }, []);

  // The palette is shown as colors only: its tokens are theme internals, apps
  // read the semantic tokens built on top of it. Aliases (brand → blue,
  // accent → navy) would only repeat a ramp.
  const { monoColors, palettes } = useMemo(() => {
    return splitPaletteTokens(tokenByCategory[TOKEN_CATEGORY.palette].filter((token) => !token.value.startsWith('var(')));
  }, [tokenByCategory]);

  return (
    <div>
      <Heading
        label="Theme Variables"
        level={ 2 } />

      {
        SECTIONS
          .filter(([, category]) => tokenByCategory[category].length > 0)
          .map(([label, category]) => (
            <section key={ category }>
              <Heading
                label={ label }
                level={ 3 } />

              <TokensTable tokens={ tokenByCategory[category] } />
            </section>
          ))
      }

      <Heading
        label="Color Palettes"
        level={ 2 } />

      <Text as="p">The colors the themes are built from. Use them through the semantic tokens above.</Text>

      <div style={{ overflowX: 'auto' }}>
        {
          palettes.map((palette, idx) => (
            <ColorPalette
              key={ idx }
              tokens={ palette } />
          ))
        }
      </div>

      <br />

      <ColorPalette tokens={ monoColors } />
    </div>
  );
};

export {
  DesignTokens,
};
