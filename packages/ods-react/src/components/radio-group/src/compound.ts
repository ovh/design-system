import { Radio, type RadioProp } from './components/radio/Radio';
import { RadioControl, type RadioControlProp } from './components/radio-control/RadioControl';
import { type RadioGroupProp, RadioGroup as RadioGroupRoot, type RadioValueChangeDetail } from './components/radio-group/RadioGroup';
import { RadioLabel, type RadioLabelProp } from './components/radio-label/RadioLabel';

const RadioGroup = {
  Control: RadioControl,
  Label: RadioLabel,
  Radio: Radio,
  Root: RadioGroupRoot,
};

export { RadioGroup };
export type { RadioGroupProp, RadioProp, RadioControlProp, RadioLabelProp, RadioValueChangeDetail };
