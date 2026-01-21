import { type ComboboxProp, Combobox as ComboboxRoot } from './components/combobox/Combobox';
import { ComboboxContent, type ComboboxContentProp } from './components/combobox-content/ComboboxContent';
import { ComboboxControl, type ComboboxControlProp } from './components/combobox-control/ComboboxControl';

const Combobox = Object.assign(ComboboxRoot, {
  Content: ComboboxContent,
  Control: ComboboxControl,
});

export { Combobox };
export { ComboboxContent, ComboboxControl };
export type { ComboboxProp, ComboboxContentProp, ComboboxControlProp };
export {
  type ComboboxInputValueChangeDetails,
  type ComboboxGroupItem,
  type ComboboxItem,
  type ComboboxOptionItem,
  type ComboboxValueChangeDetails,
} from './contexts/useCombobox';
