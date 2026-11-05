/* Compiled to strings instead of imported directly: the stylesheet has to be swapped on demand,
   which a plain `import '...css'` cannot do. */
import aluminiumDarkCss from '@ovhcloud/ods-themes/aluminium-dark/css?inline';
import blueJeansDarkCss from '@ovhcloud/ods-themes/blue-jeans-dark/css?inline';
import blueJeansCss from '@ovhcloud/ods-themes/blue-jeans/css?inline';

type Brand = 'blue-jeans' | 'default';
type Scheme = 'dark' | 'light';

/* Each mode is a complete theme. The default light one is the theme main.tsx loads, so it needs no
   style of its own here. */
const THEMES: Record<Brand, Record<Scheme, string>> = {
  'blue-jeans': { dark: blueJeansDarkCss, light: blueJeansCss },
  default: { dark: aluminiumDarkCss, light: '' },
};

/* One style element, after the theme main.tsx loads: it holds the theme shown, whole, so it wins over
   that one on every token. The demo frames mirror it (StyleSync). */
const themeStyle = ((): HTMLStyleElement => {
  const existing = document.getElementById('ods-doc-theme');
  if (existing instanceof HTMLStyleElement) {
    return existing;
  }
  const style = document.createElement('style');
  style.id = 'ods-doc-theme';
  document.head.append(style);
  return style;
})();

/* The brand is kept from one visit to the next, and applied from here: its select is not mounted
   while the navigation drawer is closed. */
const BRAND_KEY = 'ods-doc-brand';

const readStoredBrand = (): Brand => {
  try {
    return localStorage.getItem(BRAND_KEY) === 'blue-jeans' ? 'blue-jeans' : 'default';
  } catch {
    return 'default';
  }
};

const current: { brand: Brand, scheme: Scheme } = { brand: readStoredBrand(), scheme: 'light' };

/* data-theme marks the scheme actually shown, for what the docs paint themselves (code blocks,
   sandbox editor). */
const apply = () => {
  themeStyle.textContent = THEMES[current.brand][current.scheme];
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
