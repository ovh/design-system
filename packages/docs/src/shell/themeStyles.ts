/* Compiled to strings instead of imported directly: the stylesheets have to be added and removed on
   demand, which a plain `import '...css'` cannot do. */
import aluminiumDarkCss from '../../../themes/src/aluminium-dark/index.scss?inline';
import blueJeansCss from '../../../themes/src/blue-jeans/index.scss?inline';

type Brand = 'blue-jeans' | 'default';
type Scheme = 'dark' | 'light';

/* The ODS stylesheets layered over the default theme main.tsx loads, all targeting :root at its
   specificity: the brand theme, then its dark overlay. Blue Jeans has no dark overlay yet (it comes
   with blue-jeans-dark): it stays light in the dark scheme. */
const THEMES: Record<Brand, { dark?: string, light: string }> = {
  'blue-jeans': { light: blueJeansCss },
  default: { dark: aluminiumDarkCss, light: '' },
};

/* Two style elements created once, in this order, so that the dark overlay always comes after the
   brand, whichever of the two changes last. The demo frames mirror them (StyleSync). */
const styleOf = (id: string): HTMLStyleElement => {
  const existing = document.getElementById(id);
  if (existing instanceof HTMLStyleElement) {
    return existing;
  }
  const style = document.createElement('style');
  style.id = id;
  document.head.append(style);
  return style;
};
const brandStyle = styleOf('ods-doc-brand');
const schemeStyle = styleOf('ods-doc-scheme');

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
  const theme = THEMES[current.brand];
  const dark = current.scheme === 'dark' ? theme.dark : undefined;
  brandStyle.textContent = theme.light;
  schemeStyle.textContent = dark ?? '';
  if (dark) {
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
