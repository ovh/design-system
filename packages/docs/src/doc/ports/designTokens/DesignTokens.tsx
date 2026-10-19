import lightThemeTokens from '@ovhcloud/ods-themes/default/tokens';
import { useMemo } from 'react';
import { TOKEN_CATEGORY } from '../constants/designTokens';
import { categorizeTokens, splitPaletteTokens } from '../helpers/designTokens';
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
    return categorizeTokens(lightThemeTokens.root);
  }, [lightThemeTokens.root]);

  const { monoColors, opacities, palettes } = useMemo(() => {
    return splitPaletteTokens(tokenByCategory[TOKEN_CATEGORY.palette]);
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

      <section>
        <Heading
          label="Opacity"
          level={ 3 } />

        <TokensTable tokens={ opacities } />
      </section>
    </div>
  );
};

export {
  DesignTokens,
};
