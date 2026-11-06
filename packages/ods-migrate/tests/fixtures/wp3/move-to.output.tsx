import { Popover, PopoverContent, Select } from '@ovhcloud/ods-react';

export const A = () => <Popover overlayConfig={{ position: 'top', gutter: 8 }}><PopoverContent /></Popover>;
export const B = ({ config }) => <Popover overlayConfig={{ sameWidth: true, ...config }} />;
export const C = () => <Popover overlayConfig={{ gutter: 4, position: 'bottom' }} />;
export const D = () => <Popover overlayConfig={{ gutter: 4 }} />;
export const E = () => <Select />;
export const F = () => <Select overlayConfig={{ sameWidth: false }} />;
export const G = () => (
  <Popover
    overlayConfig={{
      sameWidth: true,
      position: 'left',
    }}
  />
);
export const H = ({ c }) => <Popover overlayConfig={{ position: c ? 'top' : 'bottom', ...(c && { gutter: 1 }) }} />;
export const I = () => <Popover overlayConfig={{ gutter: 4, sameWidth: false, }} />;
