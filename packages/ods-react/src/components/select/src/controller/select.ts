import { type SelectItem } from '../contexts/useSelect';

function isGroup(item: SelectItem): boolean {
  return !Object.prototype.hasOwnProperty.call(item, 'value');
}

export {
  isGroup,
};
