import defaultThemeCssRaw from '@ovhcloud/ods-themes/default?raw';
import testThemeCssRaw from '@ovhcloud/ods-themes/test?raw';
import { CUSTOM_BASE_THEME_STORAGE_KEY } from '../constants/themeConstants';

export type ThemeBase = 'default' | 'test';
export type ThemeName = ThemeBase | 'custom';

function parseRootVariables(cssText: string): Record<string, string> {
  const variables: Record<string, string> = {};
  const rootMatch = cssText.match(/:root\s*\{([\s\S]*?)\}/);
  if (!rootMatch) return variables;
  const body = rootMatch[1];
  const varRegex = /(--ods-[\w-]+)\s*:\s*([^;]+);/g;
  let m: RegExpExecArray | null;
  while ((m = varRegex.exec(body)) !== null) {
    const name = m[1].trim();
    const value = m[2].trim();
    variables[name] = value;
  }
  return variables;
}

const DEFAULT_TOKENS = parseRootVariables(defaultThemeCssRaw);
const TEST_TOKENS = parseRootVariables(testThemeCssRaw);

export function getBaseThemeTokens(theme: ThemeName): Record<string, string> {
  let base: ThemeBase = 'default';
  if (theme === 'custom') {
    try {
      const saved = window.localStorage.getItem(CUSTOM_BASE_THEME_STORAGE_KEY) as ThemeBase | null;
      if (saved === 'test' || saved === 'default') base = saved;
    } catch {}
  } else {
    base = theme;
  }
  return base === 'test' ? TEST_TOKENS : DEFAULT_TOKENS;
}


