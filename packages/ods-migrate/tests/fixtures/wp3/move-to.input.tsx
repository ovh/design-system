import { Popover, PopoverContent, Select } from '@ovhcloud/ods-react';

export const A = () => <Popover position="top" gutter={ 8 }><PopoverContent /></Popover>;
export const B = ({ config }) => <Popover sameWidth overlayConfig={ config } />;
export const C = () => <Popover position="bottom" overlayConfig={{ gutter: 4 }} />;
export const D = () => <Popover gutter={ 2 } overlayConfig={{ gutter: 4 }} />;
export const E = () => <Select fitControlWidth />;
export const F = () => <Select fitControlWidth={ false } />;
export const G = () => (
  <Popover
    position="left"
    overlayConfig={{
      sameWidth: true,
    }}
  />
);
export const H = ({ c }) => <Popover position={ c ? 'top' : 'bottom' } overlayConfig={ c && { gutter: 1 } } />;
export const I = () => <Popover overlayConfig={{ gutter: 4, }} sameWidth={ false } />;
