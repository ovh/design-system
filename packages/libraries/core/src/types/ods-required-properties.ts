/**
 * pick only mandatory keys of the generic T
 */
export type OdsRequiredProperties<T> = {
  [K in keyof T]: {} extends Pick<T, K> ? never : T[K]
};
