/**
 * only keep properties that can be of type `TYPE`
 */
export type OdsKeepType<T, TYPE> = {
  [P in keyof T]: T[P] extends TYPE ? T[P] : never;
};
