import { type CheckboxCheckedChangeDetail, type CheckboxCheckedState, type CheckboxProp, Checkbox as CheckboxRoot } from './components/checkbox/Checkbox';
import { CheckboxControl, type CheckboxControlProp } from './components/checkbox-control/CheckboxControl';
import { CheckboxGroup, type CheckboxGroupProp } from './components/checkbox-group/CheckboxGroup';
import { CheckboxLabel, type CheckboxLabelProp } from './components/checkbox-label/CheckboxLabel';

const Checkbox = Object.assign(CheckboxRoot, {
  Control: CheckboxControl,
  Group: CheckboxGroup,
  Label: CheckboxLabel,
});

export { Checkbox };
export { CheckboxControl, CheckboxGroup, CheckboxLabel };
export type { CheckboxProp, CheckboxCheckedChangeDetail, CheckboxCheckedState, CheckboxControlProp, CheckboxGroupProp, CheckboxLabelProp };
