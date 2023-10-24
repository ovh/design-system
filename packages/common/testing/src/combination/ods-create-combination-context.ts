import { OdsCombinationContext } from './ods-combination-context';

export function odsCreateCombinationContext<T>(name: string, values: Array<T>, defaultContext = true): Array<OdsCombinationContext<T | undefined>> {
  return ([
    ...(defaultContext ? [undefined] : []),
    ...values]).map((value) =>
    ({
      name: `${name}=${value}`,
      value,
    }),
  );
}
