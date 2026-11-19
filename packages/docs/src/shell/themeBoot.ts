/* The theme a reader chose, kept from one visit to the next: one source for the app (themeStyles.ts,
   TopbarSelects.tsx) and for the script the pre-rendered pages run before their first paint
   (scripts/prerender.mjs), so that both read the same keys the same way. */

type Brand = 'blue-jeans' | 'default';
type Scheme = 'dark' | 'light';
type ThemeChoice = Scheme | 'system';

const BRAND_KEY = 'ods-doc-brand';
// Same key as the old manager addons: the preference survived the platform switch.
const THEME_KEY = 'ods-doc-theme';

/* The ODS theme package entry of each brand and scheme, as a file the boot script can load: the
   default light one is the theme main.tsx loads, so it has none. */
const THEME_FILES: Record<string, string> = {
  'blue-jeans-dark': '@ovhcloud/ods-themes/blue-jeans-dark/css',
  'blue-jeans-light': '@ovhcloud/ods-themes/blue-jeans/css',
  'default-dark': '@ovhcloud/ods-themes/aluminium-dark/css',
};

/* Self-contained, since it is also written as is into the head of the pre-rendered pages: no import,
   no closure, so it spells the keys out (themeBootScript checks they are BRAND_KEY and THEME_KEY).
   Throws where the storage is blocked; the callers fall back to the defaults. */
function readStoredTheme(): { brand: Brand, choice: ThemeChoice, scheme: Scheme } {
  const stored = JSON.parse(localStorage.getItem('ods-doc-theme') || '""');
  const choice: ThemeChoice = stored === 'dark' || stored === 'light' ? stored : 'system';
  return {
    brand: localStorage.getItem('ods-doc-brand') === 'blue-jeans' ? 'blue-jeans' : 'default',
    choice,
    scheme: choice === 'dark' || (choice === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
  };
}

/* The inline script of a pre-rendered page, base being the path from the page to the deploy root.
   document.write, not appendChild: only a stylesheet the parser inserts blocks the first paint, so
   a page in the dark scheme never shows light while the scripts load. themeStyles.ts takes over
   from it once loaded. */
function themeBootScript(base: string): string {
  const source = readStoredTheme.toString();
  if (![BRAND_KEY, THEME_KEY].every((key) => new RegExp(`['"\`]${key}['"\`]`).test(source))) {
    throw new Error('readStoredTheme must read BRAND_KEY and THEME_KEY');
  }
  return `<script>(function(){try{var t=(${source})();`
    + 'if(t.scheme===\'dark\'){document.documentElement.setAttribute(\'data-theme\',\'dark\');}'
    + `if(t.scheme==='dark'||t.brand!=='default'){document.write('<link id="ods-doc-theme-boot" rel="stylesheet" href="${base}assets/themes/'+t.brand+'-'+t.scheme+'.css">');}`
    + '}catch(e){}})();</script>';
}

export { BRAND_KEY, THEME_FILES, THEME_KEY, type Brand, type Scheme, type ThemeChoice, readStoredTheme, themeBootScript };
