import { useState } from 'react';
import { Select, SelectContent, SelectControl } from '../../../ods-react/src/components/select/src';
import { type Brand, getThemeBrand, setThemeBrand } from './themeStyles';

/* DEV/DEBUG ONLY - not a product feature: the brand themes ODS ships (themeStyles.ts swaps them). */
const BRAND_ITEMS = [
  { customRendererData: { suffix: ' (default)' }, label: 'Aluminium', value: 'default' },
  { label: 'Blue Jeans', value: 'blue-jeans' },
];

const BrandSelect = ({ className }: { className?: string }) => {
  const [brand, setBrand] = useState<Brand>(getThemeBrand);

  return (
    <Select
      className={ className }
      data-testid="brand-select"
      items={ BRAND_ITEMS }
      onValueChange={ ({ value }) => {
        const next = (value[0] as Brand) ?? 'default';
        setBrand(next);
        setThemeBrand(next);
      } }
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
