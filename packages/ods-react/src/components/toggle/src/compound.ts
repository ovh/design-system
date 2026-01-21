import { type ToggleProp, Toggle as ToggleRoot } from './components/toggle/Toggle';
import { ToggleControl, type ToggleControlProp } from './components/toggle-control/ToggleControl';
import { ToggleLabel, type ToggleLabelProp } from './components/toggle-label/ToggleLabel';

const Toggle = {
  Control: ToggleControl,
  Label: ToggleLabel,
  Root: ToggleRoot,
};

export { Toggle };
export type { ToggleProp, ToggleControlProp, ToggleLabelProp };
export { type ToggleCheckedChangeDetail } from './contexts/useToggle';
