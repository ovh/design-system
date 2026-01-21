import { type SelectProp, Select as SelectRoot } from './components/select/Select';
import { SelectContent, type SelectContentProp } from './components/select-content/SelectContent';
import { SelectControl, type SelectControlProp } from './components/select-control/SelectControl';

const Select = {
  Content: SelectContent,
  Control: SelectControl,
  Root: SelectRoot,
};

export { Select };
export type { SelectProp, SelectContentProp, SelectControlProp };
export { type SelectCustomGroupRendererArg, type SelectCustomItemRendererArg, type SelectCustomOptionRendererArg, type SelectGroupItem, type SelectItem, type SelectMultipleMode, type SelectOptionItem, type SelectValueChangeDetail } from './contexts/useSelect';
