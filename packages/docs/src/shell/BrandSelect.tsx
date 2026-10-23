import { useEffect, useState } from 'react';
/* Compiled to strings instead of imported directly: the stylesheet has to be added and removed on
   demand, which a plain `import '...css'` cannot do. */
import blueJeansCss from '../../../themes/src/blue-jeans/index.scss?inline';
import { Select, SelectContent, SelectControl } from '../../../ods-react/src/components/select/src';

/* DEV/DEBUG ONLY - not a product feature.
   blue-jeans compiles to a whole theme targeting :root, at the same specificity as the default
   theme main.tsx loads statically. Switching to it is therefore just a matter of injecting its
   stylesheet after the default one (source order decides) and removing it when default is picked
   again. */
const STORAGE_KEY = 'ods-doc-brand';
const STYLE_ID = 'ods-doc-brand-override';

type Brand = 'blue-jeans' | 'default';

const BRAND_CSS: Record<Exclude<Brand, 'default'>, string> = {
  'blue-jeans': blueJeansCss,
};

const BRAND_ITEMS = [
  { customRendererData: { suffix: ' (default)' }, label: 'Aluminium', value: 'default' },
  { label: 'Blue Jeans', value: 'blue-jeans' },
];

function readStoredBrand(): Brand {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'blue-jeans' ? stored : 'default';
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
      overlayConfig={ { sameWidth: false } }
      value={ [brand] }>
      <SelectControl aria-label="Theme" />
      <SelectContent
        customOptionRenderer={ ({ customData, label }) => (
          <span>{ label }{ (customData as { suffix?: string } | undefined)?.suffix }</span>
        ) } />
    </Select>
  );
};

export { BrandSelect };
