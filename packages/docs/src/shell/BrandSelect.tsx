import { useEffect, useState } from 'react';
/* Compiled to strings instead of imported directly: the stylesheet has to be added and removed on
   demand, which a plain `import '...css'` cannot do. */
import blueJeansCss from '../../../themes/src/blue-jeans/index.scss?inline';
import managerCss from '../../../themes/src/manager/index.scss?inline';
import wtfCss from '../../../themes/src/wtf/index.scss?inline';
import { Select, SelectContent, SelectControl } from '../../../ods-react/src/components/select/src';

/* DEV/DEBUG ONLY - not a product feature.
   blue-jeans and manager each configure the core rather than layering over it, so both compile to
   a whole theme targeting :root, at the same specificity as the default theme main.tsx loads
   statically. Switching between them is therefore just a matter of injecting the chosen one's
   stylesheet after the default one (source order decides) and removing it when another is picked -
   there is nothing to combine, at most one override is ever active. */
const STORAGE_KEY = 'ods-doc-brand';
const STYLE_ID = 'ods-doc-brand-override';

type Brand = 'blue-jeans' | 'default' | 'manager' | 'wtf';

const BRAND_CSS: Record<Exclude<Brand, 'default'>, string> = {
  'blue-jeans': blueJeansCss,
  'wtf': wtfCss,
  manager: managerCss,
};

const BRAND_ITEMS = [
  { label: 'Default theme', value: 'default' },
  { label: 'blue-jeans (debug)', value: 'blue-jeans' },
  { label: 'manager (debug)', value: 'manager' },
  { label: 'wtf (debug)', value: 'wtf' },
];

function readStoredBrand(): Brand {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'blue-jeans' || stored === 'manager' || stored === 'wtf' ? stored : 'default';
}

const BrandSelect = () => {
  const [brand, setBrand] = useState<Brand>(readStoredBrand);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, brand);
    document.getElementById(STYLE_ID)?.remove();

    if (brand === 'default') {
      return;
    }
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = BRAND_CSS[brand];
    document.head.append(style);
  }, [brand]);

  return (
    <Select
      data-testid="brand-select"
      items={ BRAND_ITEMS }
      onValueChange={ ({ value }) => setBrand((value[0] as Brand) ?? 'default') }
      value={ [brand] }>
      <SelectControl />
      <SelectContent />
    </Select>
  );
};

export { BrandSelect };
