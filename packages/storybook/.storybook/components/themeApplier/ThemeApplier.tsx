import { type FC, type PropsWithChildren, useEffect } from 'react';
import { THEME, THEME_STORAGE_KEY } from '../../constants/theme';
import { localGet } from '../../helpers/storage';

type ThemeApplierProp = PropsWithChildren & {
  onDarkTheme: () => void,
  onLightTheme: () => void,
}

/**
 * Fetching the current theme on MDX page is almost impossible
 * (see https://github.com/storybookjs/storybook/discussions/17190 or https://github.com/storybookjs/storybook/discussions/25134)
 * so we rely on local storage change instead.
 */
const ThemeApplier: FC<ThemeApplierProp> = ({ children, onDarkTheme, onLightTheme }) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    function setTheme(): void {
      const theme = localGet(THEME_STORAGE_KEY) || THEME.system;

      if (theme === THEME.system && prefersDark || theme === THEME.dark ) {
        onDarkTheme();
      } else {
        onLightTheme();
      }
    }

    setTheme();

    window.addEventListener('storage', setTheme);

    return () => {
      removeEventListener('storage', setTheme);
    };
  }, []);

  return children;
}

export {
  ThemeApplier,
};
