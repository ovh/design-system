/**
 * replace null type of properties by your own type
 */
export type OdsOverrideNull<T, D> = {
  [P in keyof T]: T[P] extends null ? never : (T[P] | D);
};
