import { type ButtonGroupProp, ButtonGroup as ButtonGroupRoot } from './components/button-group/ButtonGroup';
import { ButtonGroupItem, type ButtonGroupItemProp } from './components/button-group-item/ButtonGroupItem';

const ButtonGroup = {
  Item: ButtonGroupItem,
  Root: ButtonGroupRoot,
};

export { ButtonGroup };
export type { ButtonGroupProp, ButtonGroupItemProp };
export { BUTTON_GROUP_SIZE, BUTTON_GROUP_SIZES, type ButtonGroupSize } from './constants/button-group-size';
export { type ButtonGroupValueChangeDetail } from './contexts/useButtonGroup';
