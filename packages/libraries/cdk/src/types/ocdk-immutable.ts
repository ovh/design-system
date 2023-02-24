export type OcdkImmutable<T> = {
  readonly [P in keyof T]: T[P];
};
