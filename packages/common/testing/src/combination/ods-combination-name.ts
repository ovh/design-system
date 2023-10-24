import { OdsCombinationAction } from './ods-combination-action';
import { OdsCombinationContext } from './ods-combination-context';

export function odsCombinationName<T>(elements: Array<OdsCombinationAction | OdsCombinationContext<T>>) {
  return elements.map((element) => element.name).join(', ');
}
