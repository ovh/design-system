/**
 * render every property required for all levels
 */
export type DeepRequired<T> = Required<{
  [K in keyof T]: Required<DeepRequired<T[K]>>
}>
