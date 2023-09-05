/**
 * pick only the properties that are functions
 */
export type odsPickMethods<Attributes> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof Attributes]: Required<Attributes>[K] extends (...args:any[]) => any ? Attributes[K] : never;
}
