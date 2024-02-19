export type OcdkDeepPartial<T> = {
  [P in keyof T]?: OcdkDeepPartial<T[P]>;
};
