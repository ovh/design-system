import lightThemeTokens from '@ovhcloud/ods-themes/default/tokens';
import { type ThemeVars, themes } from '@storybook/theming';
import { create } from '@storybook/theming/create';

type CustomTheme = ThemeVars & {
  brandColor: string,
}

const darkThemeTokens = {
  root: {
    '--ods-color-primary-500': '#66a2f7',
    '--ods-font-family-default': `'Source Sans Pro', 'Trebuchet MS', arial, 'Segoe UI', sans-serif`,
    '--ods-theme-background-color': '#1b1c1d',
    '--ods-theme-border-radius': '8px',
    '--ods-theme-heading-text-color': '#a2ccfb',
    '--ods-theme-input-border-color': '#adadad',
    '--ods-theme-input-placeholder-text-color': '#c2c2c2',
    '--ods-theme-input-text-color': '#e0e2f7',
    '--ods-theme-text-color': '#e0e2f7',
  },
};

function getCommonTheme(tokens: Record<string, string>): Record<string, string | number> {
  return {
    appBg: tokens['--ods-theme-background-color'],
    appBorderColor: tokens['--ods-color-primary-500'],
    appBorderRadius: parseInt(removeUnit(tokens['--ods-theme-border-radius']), 10) / 2,
    barHoverColor: tokens['--ods-color-primary-500'],
    barSelectedColor: tokens['--ods-color-primary-500'],
    barTextColor: tokens['--ods-theme-text-color'],
    colorPrimary: tokens['--ods-color-primary-500'],
    colorSecondary: tokens['--ods-color-primary-500'],
    fontBase: tokens['--ods-font-family-default'],
    fontCode: 'monospace',
    inputBg: tokens['--ods-theme-background-color'],
    inputBorder: tokens['--ods-theme-input-border-color'],
    inputBorderRadius: parseInt(removeUnit(tokens['--ods-theme-border-radius']), 10) / 2,
    inputTextColor: tokens['--ods-theme-input-text-color'],
    textColor: tokens['--ods-theme-text-color'],
    textMutedColor: tokens['--ods-theme-heading-text-color'],
  };
}

function removeUnit(value: string, unit = 'px'): string {
  return value.split(unit)[0];
}

const dark = create({
  ...themes.dark,
  ...getCommonTheme(darkThemeTokens.root),
}, {
  brandColor: darkThemeTokens.root['--ods-theme-text-color'],
}) as CustomTheme;

const light = create({
  ...getCommonTheme(lightThemeTokens.root),
  appBg: '#f3fcff',
  appContentBg: '#fff',
  appPreviewBg: '#fff',
  barBg: '#f3fcff',
  base: 'light',
}, {
  brandColor: lightThemeTokens.root['--ods-theme-heading-text-color'],
}) as CustomTheme;

export {
  type CustomTheme,
  dark,
  light,
};
