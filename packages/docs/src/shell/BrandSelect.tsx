import { useState } from 'react';
import { Select, SelectContent, SelectControl } from '../../../ods-react/src/components/select/src';
import { useHydrated } from '../nav/useHydrated';
import { type Brand, getThemeBrand, setThemeBrand } from './themeStyles';

/* DEV/DEBUG ONLY - not a product feature: the brand themes ODS ships (themeStyles.ts swaps them). */
const BRAND_ITEMS = [
  { customRendererData: { suffix: ' (default)' }, label: 'Aluminium', value: 'default' },
  { label: 'Blue Jeans', value: 'blue-jeans' },
];

const BrandSelect = ({ className }: { className?: string }) => {
  // The pre-rendered HTML cannot know the stored brand: the default until hydrated, the stored one
  // after, the reader's pick once made.
  const [picked, setPicked] = useState<Brand | null>(null);
  const hydrated = useHydrated();
  const brand = picked ?? (hydrated ? getThemeBrand() : 'default');

  return (
    <Select
      className={ className }
      data-testid="brand-select"
      items={ BRAND_ITEMS }
      onValueChange={ ({ value }) => {
        const next = (value[0] as Brand) ?? 'default';
        setPicked(next);
        setThemeBrand(next);
      } }
      overlayConfig={ { sameWidth: false } }
      value={ [brand] }>
      { /* Until hydrated, a select that does not open (SearchHint, Shell.tsx). */ }
      <SelectControl aria-disabled={ !hydrated } aria-label="Theme" />
      <SelectContent
        customOptionRenderer={ ({ customData, label }) => (
          <span>{ label }{ (customData as { suffix?: string } | undefined)?.suffix }</span>
        ) } />
    </Select>
  );
};

export { BrandSelect };
