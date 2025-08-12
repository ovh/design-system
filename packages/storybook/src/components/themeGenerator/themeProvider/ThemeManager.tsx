import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import defaultThemeUrl from '@ovhcloud/ods-themes/default?url';
import testThemeUrl from '@ovhcloud/ods-themes/test?url';
import { CUSTOM_BASE_THEME_STORAGE_KEY, THEME_LINK_ELEMENT_ID, THEME_STORAGE_KEY } from '../constants/themeConstants';

export type ThemeName = 'default' | 'test' | 'custom';

interface ThemeManagerContextValue {
  currentTheme: ThemeName;
  availableThemes: ThemeName[];
  setTheme: (theme: ThemeName) => void;
}

const THEME_HREF_BY_NAME: Record<'default' | 'test', string> = {
  default: defaultThemeUrl,
  test: testThemeUrl,
};

const ThemeManagerContext = createContext<ThemeManagerContextValue | undefined>(undefined);

function ensureLinkElement(): HTMLLinkElement {
  let linkElement = document.getElementById(THEME_LINK_ELEMENT_ID) as HTMLLinkElement | null;
  if (!linkElement) {
    linkElement = document.createElement('link');
    linkElement.id = THEME_LINK_ELEMENT_ID;
    linkElement.setAttribute('data-ods', 'theme-link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    document.head.appendChild(linkElement);
  }
  return linkElement;
}

const ThemeManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const availableThemes: ThemeName[] = useMemo(() => ['default', 'test', 'custom'], []);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('default');
  const initializedRef = useRef(false);

  const applyThemeLink = useCallback((theme: ThemeName) => {
    let href: string | undefined;
    if (theme === 'custom') {
      let base: 'default' | 'test' = 'default';
      try {
        const savedBase = window.localStorage.getItem(CUSTOM_BASE_THEME_STORAGE_KEY) as 'default' | 'test' | null;
        if (savedBase && (savedBase === 'default' || savedBase === 'test')) {
          base = savedBase;
        }
      } catch {
      }
      href = THEME_HREF_BY_NAME[base];
    } else {
      href = THEME_HREF_BY_NAME[theme];
    }
    const linkElement = ensureLinkElement();
    const finalHref = href ?? '';
    if (linkElement.href !== finalHref) {
      linkElement.href = finalHref;
    } else {
      linkElement.href = '';
      setTimeout(() => { linkElement.href = finalHref; }, 0);
    }
  }, []);

  const setTheme = useCallback((theme: ThemeName) => {
    setCurrentTheme(theme);
    applyThemeLink(theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
    }
    // Do not auto-apply or clear overrides on theme switch; changes only happen on explicit Apply
  }, [applyThemeLink]);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    let initialTheme: ThemeName = currentTheme;
    try {
      const saved = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null;
      if (saved && availableThemes.includes(saved)) {
        initialTheme = saved;
        setCurrentTheme(saved);
      }
    } catch {}
    applyThemeLink(initialTheme);
  }, [applyThemeLink, availableThemes, currentTheme]);

  const value = useMemo<ThemeManagerContextValue>(() => ({
    currentTheme,
    availableThemes,
    setTheme,
  }), [availableThemes, currentTheme, setTheme]);

  return (
    <ThemeManagerContext.Provider value={ value }>
      { children }
    </ThemeManagerContext.Provider>
  );
};

function useThemeManager(): ThemeManagerContextValue {
  const ctx = useContext(ThemeManagerContext);
  if (!ctx) {
    throw new Error('useThemeManager must be used within ThemeManagerProvider');
  }
  return ctx;
}

export { ThemeManagerProvider, useThemeManager };


