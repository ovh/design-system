import { type CheckboxCheckedChangeDetail, type CheckboxCheckedState, type CheckboxProp, Checkbox as CheckboxRoot } from './components/checkbox/Checkbox';
import { CheckboxControl, type CheckboxControlProp } from './components/checkbox-control/CheckboxControl';
import { CheckboxGroup, type CheckboxGroupProp } from './components/checkbox-group/CheckboxGroup';
import { CheckboxLabel, type CheckboxLabelProp } from './components/checkbox-label/CheckboxLabel';

const Checkbox = {
  Control: CheckboxControl,
  Group: CheckboxGroup,
  Label: CheckboxLabel,
  Root: CheckboxRoot,
};

export { Checkbox };
export type { CheckboxProp, CheckboxCheckedChangeDetail, CheckboxCheckedState, CheckboxControlProp, CheckboxGroupProp, CheckboxLabelProp };
