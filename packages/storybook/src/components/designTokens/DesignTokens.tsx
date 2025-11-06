import { BADGE_COLOR, Badge } from '@ovhcloud/ods-react';
import lightThemeTokens from '@ovhcloud/ods-themes/default/tokens';
import { CodeOrSourceMdx } from '@storybook/blocks';
import React, { useMemo } from 'react';
import { MONO_COLORS, PALETTES, TOKEN_CATEGORY, type Token } from '../../constants/designTokens';
import { categorizeTokens, splitPalettes } from '../../helpers/designTokens';
import { Heading } from '../heading/Heading';
import { ColorPalette } from './colorPalette/ColorPalette';
import { TokensTable } from './tokensTable/TokensTable';

const DesignTokens = () => {
  const tokenByCategory = useMemo(() => {
    return categorizeTokens(lightThemeTokens.root);
  }, [lightThemeTokens.root]);

  const { monoColors, palettes } = useMemo(() => {
    if (tokenByCategory[TOKEN_CATEGORY.palette].length) {
      const { monoColors, paletteColors } = tokenByCategory[TOKEN_CATEGORY.palette].reduce<{
        monoColors: Token[],
        paletteColors: Token[],
      }>((res, token) => {
        const tokenSplits = token.name.split('-');

        if (MONO_COLORS.indexOf(tokenSplits[tokenSplits.length - 1]) > -1) {
          res.monoColors.push(token);
          return res;
        }

        if (tokenSplits.length > 1
          && /\d{3}$/.test(tokenSplits[tokenSplits.length - 1])
          && PALETTES.indexOf(tokenSplits[tokenSplits.length - 2]) > -1) {
          res.paletteColors.push(token);
          return res;
        }

        return res;
      }, {
        monoColors: [],
        paletteColors: [],
      });

      return {
        monoColors: monoColors.sort((a, b) => a.name.localeCompare(b.name)),
        palettes: splitPalettes(paletteColors.sort((a, b) => a.name.localeCompare(b.name))),
      }
    }
    return {
      monoColors: [],
      palettes: [],
    };
  }, [tokenByCategory]);

  return (
    <div>
      <Heading
        label="Theme Variables"
        level={ 2 } />

      <section>
        <Heading
          label="Color"
          level={ 3 } />

        <TokensTable tokens={ tokenByCategory[TOKEN_CATEGORY.color] } />
      </section>

      <section>
        <Heading
          label="Outline"
          level={ 3 } />

        <TokensTable tokens={ tokenByCategory[TOKEN_CATEGORY.outline] } />
      </section>

      <section>
        <Heading
          label="Overlay"
          level={ 3 } />

        <TokensTable tokens={ tokenByCategory[TOKEN_CATEGORY.overlay] } />
      </section>

      <section>
        <Heading
          label="Spacing"
          level={ 3 } />

        <TokensTable tokens={ tokenByCategory[TOKEN_CATEGORY.spacing] } />
      </section>

      <section>
        <Heading
          label="Font Family"
          level={ 3 } />

        <TokensTable tokens={ tokenByCategory[TOKEN_CATEGORY.fontFamily] } />
      </section>

      <section>
        <Heading
          label="Form Element"
          level={ 3 } />

        <TokensTable tokens={ tokenByCategory[TOKEN_CATEGORY.formElement] } />
      </section>

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

      <Heading
        label="Previous tokens"
        level={ 2 }>
        <Badge color={ BADGE_COLOR.warning }>Deprecated</Badge>
      </Heading>

      <p>
        Following tokens have been deprecated and will be removed in a future major release.
        <br />
        Non spacing tokens have been renamed with the <CodeOrSourceMdx>--ods-theme</CodeOrSourceMdx> prefix.
        <br />
        Spacing tokens have been reduced to one base value, you should set your values based on this base, for example:
        <CodeOrSourceMdx>--my-border-radius-sm: calc(var(--ods-theme-border-radius)) / 2;</CodeOrSourceMdx>.
      </p>

      <TokensTable tokens={ tokenByCategory[TOKEN_CATEGORY.deprecated] } />
    </div>
  );
};

export {
  DesignTokens,
};
