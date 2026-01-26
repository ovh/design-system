import { type ToggleProp, Toggle as ToggleRoot } from './components/toggle/Toggle';
import { ToggleControl, type ToggleControlProp } from './components/toggle-control/ToggleControl';
import { ToggleLabel, type ToggleLabelProp } from './components/toggle-label/ToggleLabel';

const Toggle = Object.assign(ToggleRoot, {
  Control: ToggleControl,
  Label: ToggleLabel,
});

export { Toggle };
export { ToggleControl, ToggleLabel };
export type { ToggleProp, ToggleControlProp, ToggleLabelProp };
export { type ToggleCheckedChangeDetail } from './contexts/useToggle';
