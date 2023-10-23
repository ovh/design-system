import {OdsCombinationAction} from './ods-combination-action';
import {OdsSetPropertyCbk} from './ods-set-property-cbk';

export function odsCreateCombinationPropertyAction(property: string, value: unknown, actionCbk: OdsSetPropertyCbk, defaultAction = true): OdsCombinationAction[] {
  return [
    ...(defaultAction ? [{name: `${property}=undefined`, action: () => undefined}] : []),
    {name: `${property}=${value}`, action: () => actionCbk(property, value)}];
}
