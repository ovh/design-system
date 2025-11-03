import { BADGE_COLOR, Badge } from '@ovhcloud/ods-react';
import lightThemeTokens from '@ovhcloud/ods-themes/default/tokens';
import { CodeOrSourceMdx } from '@storybook/blocks';
import React, { useMemo } from 'react';
import { MONO_COLORS, PALETTES, TOKEN_CATEGORY, TOKEN_TYPE, type Token } from '../../constants/designTokens';
import { guessTokenType } from '../../helpers/designTokens';
import { Heading } from '../heading/Heading';
import { ColorPalette } from './colorPalette/ColorPalette';
import { TokensTable } from './tokensTable/TokensTable';

function isPalette(name: string): boolean {
  const paletteNameSplits = name.split(/^--ods-color-([a-z]+)(-.)*/);

  if (paletteNameSplits.length > 0) {
    return MONO_COLORS.indexOf(paletteNameSplits[1]) > -1 || PALETTES.indexOf(paletteNameSplits[1]) > -1;
  }

  return false;
}

function splitPalettes(tokens: Token[]): Token[][] {
  let paletteIdx = 0;

  return tokens.reduce<Token[][]>((res, token, idx, list) => {
    if (idx) {
      const paletteName = token.name.split(/-\d{3}$/)[0];
      const previousPaletteName = list[idx - 1].name.split(/-\d{3}$/)[0];

      if (previousPaletteName !== paletteName) {
        paletteIdx++;
        res.push([]);
      }
    }
    res[paletteIdx].push(token);
    return res;
  }, [[]]);
}

const DesignTokens = () => {
  const tokenByCategory = useMemo(() => {
    return Object.entries(lightThemeTokens.root).reduce<Record<TOKEN_CATEGORY, Token[]>>((res, [name, value]) => {
      if (name.startsWith('--ods-color')) {
        if (isPalette(name)) {
          res[TOKEN_CATEGORY.palette].push({ name, type: TOKEN_TYPE.palette, value });
        } else {
          res[TOKEN_CATEGORY.deprecated].push({ name, type: guessTokenType(name), value });
        }
      } else if (!name.startsWith('--ods-theme')) {
        res[TOKEN_CATEGORY.deprecated].push({ name, type: guessTokenType(name), value });
      } else if (name.startsWith('--ods-theme-font-family')) {
        res[TOKEN_CATEGORY.fontFamily].push({ name, type: TOKEN_TYPE.fontFamily, value });
      } else if (name.startsWith('--ods-theme-input')) {
        res[TOKEN_CATEGORY.formElement].push({ name, type: guessTokenType(name), value });
      } else if (name.startsWith('--ods-theme-outline')) {
        res[TOKEN_CATEGORY.outline].push({ name, type: TOKEN_TYPE.outline, value });
      } else if (name.startsWith('--ods-theme-backdrop') || name.startsWith('--ods-theme-overlay')) {
        res[TOKEN_CATEGORY.overlay].push({ name, type: guessTokenType(name), value });
      } else if (!name.includes('-color')) {
        res[TOKEN_CATEGORY.spacing].push({ name, type: guessTokenType(name), value });
      } else {
        res[TOKEN_CATEGORY.color].push({ name, type: TOKEN_TYPE.color, value });
      }

      return res;
    }, {
      [TOKEN_CATEGORY.color]: [],
      [TOKEN_CATEGORY.deprecated]: [],
      [TOKEN_CATEGORY.fontFamily]: [],
      [TOKEN_CATEGORY.formElement]: [],
      [TOKEN_CATEGORY.outline]: [],
      [TOKEN_CATEGORY.overlay]: [],
      [TOKEN_CATEGORY.palette]: [],
      [TOKEN_CATEGORY.spacing]: [],
    });
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
