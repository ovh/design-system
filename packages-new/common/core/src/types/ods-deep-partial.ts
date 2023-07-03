export type OdsDeepPartial<T> = {
  [P in keyof T]?: OdsDeepPartial<T[P]>;
};
