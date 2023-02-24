/**
 * filter properties that are undefined
 */
export function odsFilterUndefProps<T extends {[k:string]: unknown}>(props: T): T {
  const filtered: Partial<T> = {};
  const keys = Object.keys(props) as Array<keyof T>;
  keys.forEach((p) => {
    const prop = props[ p ] as unknown;
    if (prop !== undefined) {
      filtered[ p ] = prop as never;
    }
  })
  return filtered as T;
}
