import { type SwitchProp, Switch as SwitchRoot, type SwitchValueChangeDetail } from './components/switch/Switch';
import { SwitchItem, type SwitchItemProp } from './components/switch-item/SwitchItem';

const Switch = Object.assign(SwitchRoot, {
  Item: SwitchItem,
});

export { Switch };
export { SwitchItem };
export type { SwitchProp, SwitchValueChangeDetail, SwitchItemProp };
export { SWITCH_SIZE, SWITCH_SIZES, type SwitchSize } from './constants/switch-size';
