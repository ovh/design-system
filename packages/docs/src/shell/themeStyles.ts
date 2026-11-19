/* Compiled to strings instead of imported directly: the stylesheet has to be swapped on demand,
   which a plain `import '...css'` cannot do. */
import aluminiumDarkCss from '@ovhcloud/ods-themes/aluminium-dark/css?inline';
import blueJeansDarkCss from '@ovhcloud/ods-themes/blue-jeans-dark/css?inline';
import blueJeansCss from '@ovhcloud/ods-themes/blue-jeans/css?inline';
import { BRAND_KEY, type Brand, type Scheme, readStoredTheme } from './themeBoot';


/* Each mode is a complete theme. The default light one is the theme main.tsx loads, so it needs no
   style of its own here. */
const THEMES: Record<Brand, Record<Scheme, string>> = {
  'blue-jeans': { dark: blueJeansDarkCss, light: blueJeansCss },
  default: { dark: aluminiumDarkCss, light: '' },
};

/* One style element, after the theme main.tsx loads: it holds the theme shown, whole, so it wins over
   that one on every token. The demo frames mirror it (StyleSync). Created on the first use: the
   pages are also rendered at build time, where there is no document. */
let themeStyle: HTMLStyleElement | null = null;
const getThemeStyle = (): HTMLStyleElement => {
  if (themeStyle) {
    return themeStyle;
  }
  const existing = document.getElementById('ods-doc-theme');
  if (existing instanceof HTMLStyleElement) {
    themeStyle = existing;
    return themeStyle;
  }
  themeStyle = document.createElement('style');
  themeStyle.id = 'ods-doc-theme';
  document.head.append(themeStyle);
  return themeStyle;
};

/* The brand is kept from one visit to the next, and applied from here: its select is not mounted
   while the navigation drawer is closed. The scheme is read at load too: the page keeps the one its
   boot script (themeBoot.ts) painted it with. */
const readStored = (): { brand: Brand, scheme: Scheme } => {
  try {
    const { brand, scheme } = readStoredTheme();
    return { brand, scheme };
  } catch {
    return { brand: 'default', scheme: 'light' };
  }
};

const isBrowser = typeof document !== 'undefined';
const current: { brand: Brand, scheme: Scheme } = isBrowser ? readStored() : { brand: 'default', scheme: 'light' };

/* data-theme marks the scheme actually shown, for what the docs paint themselves (code blocks,
   sandbox editor). */
const apply = () => {
  if (!isBrowser) {
    return;
  }
  getThemeStyle().textContent = THEMES[current.brand][current.scheme];
  // The theme the pre-rendered page showed before this module ran (scripts/prerender.mjs): this
  // style takes over from it.
  document.getElementById('ods-doc-theme-boot')?.remove();
  document.documentElement.removeAttribute('data-theme');
  if (current.scheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
  }
};

const getThemeBrand = (): Brand => current.brand;

const setThemeBrand = (brand: Brand) => {
  current.brand = brand;
  try {
    localStorage.setItem(BRAND_KEY, brand);
  } catch {
    // Not kept for the next visit: the brand still applies now.
  }
  apply();
};

const setThemeScheme = (scheme: Scheme) => {
  current.scheme = scheme;
  apply();
};

apply();

export { type Brand, getThemeBrand, setThemeBrand, setThemeScheme };
